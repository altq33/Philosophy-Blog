import { validationResult } from "express-validator";
import { galleryService } from "../services/GalleryService.js";
import { ApiError } from "../exceptions/ApiError.js";

class GalleryController {
  async getPictures(req, res, next) {
    try {
      const pictures = await galleryService.getPictures();
      res.json(pictures);
    } catch (error) {
      next(error);
    }
  }
}

export const galleryController = new GalleryController();
