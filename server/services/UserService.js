import { userModel } from "../models/User.js";
import bcrypt from "bcrypt";
import { v4 } from "uuid";
import { emailService } from "./EmailService.js";
import { tokenService } from "./TokenService.js";
import { ApiError } from "../exceptions/ApiError.js";

class UserService {
  async registration(email, login, password) {
    const candidate = await userModel.findOne({ email });
    if (candidate) {
      throw ApiError.BadRequest("Error in creating an account");
    }
    const salt = await bcrypt.genSalt(3);
    const passwordHash = await bcrypt.hash(password, salt);
    const activationLink = v4();

    const doc = new userModel({
      email,
      login,
      role: "User",
      password: passwordHash,
      activated: false,
      activationLink,
    });

    const user = await doc.save();

    await emailService.sendActivationMail(
      email,
      `${process.env.API_URL}/api/activate/${activationLink}`
    );
    const tokens = tokenService.generateTokensPair({
      email,
      login,
      id: user._id,
      isActivated: user._doc.activated,
    });
    await tokenService.saveToken(user._id, tokens.refreshToken);

    return {
      ...tokens,
      userId: user._id,
      email: user._doc.email,
      login: user._doc.login,
      avatarUrl: user._doc?.avatarUrl,
    };
  }

  async login(login, password) {
    const user =
      (await userModel.findOne({ login })) ??
      (await userModel.findOne({ email: login }));

    if (!user) {
      throw ApiError.BadRequest("Incorrect login or password");
    }
    const isValidPass = await bcrypt.compare(password, user.password);

    if (!isValidPass) {
      throw ApiError.BadRequest("Incorrect login or password");
    }
    const tokens = tokenService.generateTokensPair({
      email: user._doc.email,
      login: user._doc.login,
      id: user._id,
      isActivated: user._doc.activated,
    });
    await tokenService.saveToken(user._id, tokens.refreshToken);
    return {
      ...tokens,
      userId: user._id,
      email: user._doc.email,
      login: user._doc.login,
      avatarUrl: user._doc?.avatarUrl,
    };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async activate(activationLink) {
    const user = await userModel.findOne({ activationLink });
    if (!user) {
      throw ApiError.BadRequest("Error in creating an account");
    }
    user.activated = true;
    await user.save();
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauththorizedError();
    }
    const userData = await tokenService.validateRefreshToken(refreshToken);
    const tokenFromDB = tokenService.findToken(refreshToken);
    if (!userData && !tokenFromDB) {
      throw ApiError.UnauththorizedError();
    }
    const user = await userModel.findById(userData.id);
    const tokens = tokenService.generateTokensPair({
      email: user._doc.email,
      login: user._doc.login,
      id: user._id,
      isActivated: user._doc.activated,
    });
    await tokenService.saveToken(user._id, tokens.refreshToken);
    return {
      ...tokens,
      userId: user._id,
      email: user._doc.email,
      login: user._doc.login,
      avatarUrl: user._doc?.avatarUrl,
    };
  }

  async getAllUsers() {
    const users = userModel.find(
      {},
      {
        _id: 0,
        login: 1,
        bio: {
          sex: 1,
        },
        createdAt: 1,
        avatarUrl: 1,
      }
    );
    return users;
  }

  async updateUserProfile(url, login, user) {
    const currentUser = await userModel.findOneAndUpdate({ login }, user);
    if (!currentUser) {
      throw ApiError.BadRequest("Error when updating");
    }
    if (url) {
      currentUser.avatarUrl = url;
      await currentUser.save();
    }
  }

  async getProfile(login) {
    const user = await userModel.findOne(
      { login },
      {
        login: 1,
        _id: 0,
        bio: 1,
        role: 1,
        avatarUrl: 1,
      }
    );
    if (!user) {
      throw ApiError.BadRequest("User not found");
    }
    return user;
  }
}

export const userService = new UserService();
