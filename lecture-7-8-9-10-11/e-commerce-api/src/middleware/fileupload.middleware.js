//1. import multer
import multer from "multer";

// 2. Configure storage with filename and location.

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/");
  },
  filename: (req, file, cb) => {
    const name=Date.now() + "-" + file.originalname;
    cb(null,name);
  },
});

export const  uploadFile   = multer({ storage: storage });







