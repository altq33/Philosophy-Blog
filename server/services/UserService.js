import { userModel } from "../models/User.js";
import bcrypt from "bcrypt";
import { v4 } from "uuid";
import { emailService } from "./EmailService.js";
import { tokenService } from "./TokenService.js";
class UserService {
  async registration(email, login, password) {
    const salt = await bcrypt.genSalt(3);
    const passwordHash = await bcrypt.hash(password, salt);
    const activationLink = v4();

    const doc = new userModel({
      email,
      login,
      password: passwordHash,
      activated: false,
      activationLink,
    });

    const user = await doc.save();

    await emailService.sendActivationMail(
      email,
      `${process.env.API_URL}api/activate/${activationLink}`
    );
    const tokens = tokenService.generateTokensPair({
      email,
      login,
      id: user._id,
      isActivated: user._doc.isActivated,
    });
    await tokenService.saveToken(user._id, tokens.refreshToken);

    return {
      ...tokens,
      userId: user._id,
      email: user._doc.email,
    };
  }
}

export const userService = new UserService();
