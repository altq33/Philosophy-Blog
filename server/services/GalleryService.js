import { ApiError } from "../exceptions/ApiError.js";
import { galleryModel } from "../models/Gallery.js";
class GalleryService {
  async getPictures() {
    const pictures = await galleryModel.find({}, {
        _id: 0
    });
    if (!pictures) {
      throw ApiError.BadRequest("Pictures not found");
    }
    return pictures;
  }
}

export const galleryService = new GalleryService();
