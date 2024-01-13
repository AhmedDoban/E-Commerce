import multer from "multer";

const Storage = multer.diskStorage({
  destination: (Req, File, Callback) => {
    Callback(null, "Uploads/Store");
  },
  filename: (Req, File, Callback) => {
    const ext = File.mimetype.split("/")[1];
    const Fileame = `Product-${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}.${ext}`;
    Callback(null, Fileame);
  },
});

const FileFilter = (Req, File, Callback) => {
  const TYPE = File.mimetype.split("/")[0];
  if (TYPE === "image") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload_Store = multer({ storage: Storage, fileFilter: FileFilter });

export default upload_Store;
