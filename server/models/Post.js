;import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
    },
    imgUrl: {
      type: String,
      default: null,
    },
    description: {
      required: true,
      type: String,
    },
    text: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      default: null,
    },
    viewsCount: {
      type: Number,
      requred: true,
      default: 0,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const postModel = mongoose.model("Post", PostSchema);
