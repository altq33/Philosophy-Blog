import { galleryService } from "../services/GalleryService.js";

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
