import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "uploads/users/avatars");
  },
  filename: (req, file, callback) => {
    callback(null, `${req.user.login}-avatar.${file.mimetype.split("/")[1]}`);
  },
});

const types = ["image/png", "image/jpeg", "image/jpg"];

const fileFilter = (req, file, callback) => {
  if (types.includes(file.mimetype)) {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

export const fileMiddleware = multer({ storage, fileFilter });
