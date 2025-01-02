const {
  createProject,
  deleteAllProjects,
  deleteProject,
  getAllProjects,
  getProject,
  updateProject,
} = require("../controller/projectController.js");
// import multer from "multer";
const express = require("express");
const multer = require("multer");
const router = express.Router();
const storage = multer.diskStorage({
  destination: "static/images",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({
  storage: storage,
  // dest: "/images",
  fileFilter: (req, file, cb) => {
    const fileExt = file.mimetype.split("/")[1];
    if (file.mimetype.startsWith("image")) {
      return cb(null, true);
    } else {
      return cb(new Error("Please Provide Only Images!"), false);
    }
  },
});
router
  .route("/")
  .post(upload.fields([{ name: "images" }]), createProject)
  .get(getAllProjects)
  .delete(deleteAllProjects);
router
  .route("/:projectId")
  .delete(deleteProject)
  .get(getProject)
  .patch(updateProject);
module.exports = router;
