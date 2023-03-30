import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema(
  {
    url: String,
  },
);

export const galleryModel = mongoose.model("Gallery", GallerySchema);
