const { s3 } = require("../config/aws");
const multer = require("multer");
const multerS3 = require("multer-s3");
const BUCKET_NAME = "deyaa-234389/img";
class S3 {
  createBucket = (bucketName) => {
    // Create the parameters for calling createBucket
    const bucketParams = {
      Bucket: bucketName,
    };

    // call S3 to create the bucket
    s3.createBucket(bucketParams, (err, data) => {
      if (!err) {
        console.log(data);
        // return res.status(200).json({ status: true, message: data });
      } else {
        console.log(err.message);
        // return res.status(200).json({ status: true, message: err.message });
      }
    });
  };

  listBuckets = () => {
    s3.listBuckets((err, data) => {
      if (!err) {
        console.log(data);
        // return res.status(200).json({ status: true, message: data });
      } else {
        console.log(err.message);
        // return res.status(200).json({ status: true, message: err.message });
      }
    });
  };

  uploadImg = (bucketName) =>
    multer({
      storage: multerS3({
        s3: s3,
        bucket: bucketName,
        acl: "public-read",
        metadata: function (req, file, cb) {
          console.log(file);
          cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
          cb(null, Date.now() + file.originalname.toString());
        },
      }),
    });

  listObjectsInBucket = (bucketName) => {
    // Create the parameters for calling listObjects
    const bucketParams = {
      Bucket: bucketName,
    };

    // Call S3 to obtain a list of the objects in the bucket
    s3.listObjects(bucketParams, (err, data) => {
      if (!err) {
        console.log(data);
        // return res.status(200).json({ status: true, message: data });
      } else {
        console.log(err.message);
        // return res.status(200).json({ status: true, message: err.message });
      }
    });
  };

  deleteBucket = (bucketName) => {
    // Create params for S3.deleteBucket
    const bucketParams = {
      Bucket: bucketName,
    };

    // Call S3 to delete the bucket
    s3.deleteBucket(bucketParams, (err, data) => {
      if (!err) {
        console.log(data);
        // return res.status(200).json({ status: true, message: data});
      } else {
        console.log(err.message);
        // return res.status(200).json({ status: true, message: err.message });
      }
    });
  };
  deleteImg = (bucketName, path) => {
    s3.deleteObject(
      {
        Bucket: bucketName,
        Key: path,
      },
      function (err, data) {
        if (!err) {
          console.log(data);
          // return res.status(200).json({ status: true, message: data });
        } else {
          console.log(err.message);
          // return res.status(200).json({ status: true, message: err.message });
        }
      }
    );
  };
  moveFile = (bucketName, path, path2,bucketName2) => {
    var params = {
      Bucket: bucketName,
      Key: path2,
      CopySource: path /* required */,
      ACL: "public-read",
    };
    s3.copyObject(params, function (err, data) {
      if (!err) {
        s3.deleteObject({
          Bucket: bucketName2,
          Key: '16491020608521648972206700glo.png',
        //   region: "eu-central-1",
          //   ACL: "public-read",
        //   ACL: "public-read",
        },function (err, data) { console.log(data,err);})
        console.log(data);
        // return res.status(200).json({ status: true, message: data });
      } else {
        console.log(err.message);
        // return res.status(200).json({ status: true, message: err.message });
      }
    });
  };
}
module.exports = new S3();
