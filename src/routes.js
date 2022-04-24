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
const Cognito = require("./controllers/cognetoController");

const upload = require("./utils/s3.helper").uploadImg;
const fileS3 = require("./utils/s3.helper");

// cron.schedule('*/1 * * * *', EventController.getEventSoon);

//api for user

router.post("/api/addFile", upload("test-vibration-2").single("file"), (req, res) => {
  console.log(req.file.location);
  res.json({file:req.file.location});
});

router.get("/api/moveFile", (req, res) => {
  fileS3.moveFile('accepted-1999','test-vibration-2/16491020608521648972206700glo.png','zzz.pdf','test-vibration-2')
  res.json({});
});

router.get("/api/showFile", (req, res) => {
  axios
    .get(
      "https://test-vibration-2.s3.eu-central-1.amazonaws.com/16491038194971649102172749log.txt"
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

// Cognito api
router.post(
  "/auth/registerCognito",
  upload("test/img").single("img"),
  Cognito.RegisterUser
);

router.post("/auth/reSendCode", Cognito.reSendCode);

router.post("/auth/registerSubAdminCognito", Cognito.RegisterSubAdmins);

router.post("/auth/loginCognito", Cognito.Login);

router.put("/api/updateCognito", Cognito.update);

router.get("/api/ValidateToken", Cognito.ValidateToken);

router.patch("/api/confirm", Cognito.confirm);

router.delete("/api/deleteUserCognito", Cognito.DeleteUser);

router.get("/api/getAllCognito", Cognito.getAll);

router.post("/api/resetPassword", Cognito.resetPassword);

router.post("/api/confirmPassword", Cognito.confirmPassword);
module.exports = router;
