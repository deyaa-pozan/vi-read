/**
 * Created by : Deyaa
 *
 *
 */

const express = require("express");
const axios = require("axios");

const router = express.Router();
// const cron = require("node-cron");

// let S3 = require("./utils/s3.helper");
// S3 = new EventController("event");

const upload = require("./utils/s3.helper").uploadImg;
const fileS3 = require("./utils/s3.helper");

// cron.schedule('*/1 * * * *', EventController.getEventSoon);

//api for user

router.post("/api/addFile", upload("tets-1999").single("file"), (req, res) => {
  console.log(req.file.location);
  res.json({file:req.file.location});
});

router.get("/api/moveFile", (req, res) => {
  fileS3.moveFile('accepted-1999','tets-1999/16491020608521648972206700glo.png','zzz.pdf','tets-1999')
  res.json({});
});

router.get("/api/showFile", (req, res) => {
  axios
    .get(
      "https://tets-1999.s3.eu-central-1.amazonaws.com/16491038194971649102172749log.txt"
    )
    .then((result) => {
      console.log(result.data);
      res.send(result.data);
    });
});

// router.get("/api/getUser/:id", UserController.getItem);

// router.delete("/api/deleteUser/:id", UserController.deleteItem);

// router.put("/api/updateUser/:id", UserController.updateItem);

// router.post("/auth/createAuth0", UserController.Login);

// router.get("/api/getNoti/:id", UserController.getNotificationsForUser);

// router.get("/api/getGarage/:id", UserController.getGarage);

// router.post(
//   "/api/addImageToProfile/:id",
//   upload("event-markazia").single("img"),
// );

// //api for event
// router.post(
//   "/api/createEvent",
//   upload("event-markazia").single("img"),
//   EventController.create
// );

module.exports = router;
