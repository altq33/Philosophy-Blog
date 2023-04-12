import multer from "multer";

const avatarStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "uploads/users/avatars");
  },
  filename: (req, file, callback) => {
    callback(null, `${req.user.login}-avatar.${file.mimetype.split("/")[1]}`);
  },
});

const coverStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "uploads/posts/covers");
  },
  filename: (req, file, callback) => {
    const fileName = `${file.originalname.slice(0, -4)}${Date.now()}-cover.${
      file.mimetype.split("/")[1]
    }`;
    req.trueFileName = fileName;
    callback(null, fileName);
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

export const postCoverFileMiddleware = multer({
  storage: coverStorage,
  fileFilter,
});
export const avatarFileMiddleware = multer({
  storage: avatarStorage,
  fileFilter,
});
