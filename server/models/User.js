import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    login: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    activated: {
      type: Boolean,
      required: true,
    },
    activationLink: { type: String },
    avatarUrl: String,
    role: {
      type: String,
      required: true,
    },
    bio: {
      age: Number,
      sex: String,
      bio: String,
      quote: String,
      location: String,
      philosophyDireсtion: String,
      qualities: [String],
      personality: [Number],
      goals: [String],
    },
  },
  {
    timestamps: true,
  }
);

export const userModel = mongoose.model("User", UserSchema);
