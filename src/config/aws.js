const AWS = require("aws-sdk");
const accessKeyId = 'AKIA6MQHCSR6LEKIW5GA';
const secretAccessKey = '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';


// AWS sdk Config 
AWS.config.update({
    region: "eu-central-1",
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,

});

// PoolData of userpool from aws
const poolData = {
    UserPoolId: "us-east-2_ciNfNVHJp", // Your user pool id here    
    ClientId: "3qb3losi99af0k206vo939giur", // Your client id here

};

// S3 Config from aws 
const s3 = new AWS.S3({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey});

//kkkkjjgg
module.exports = { poolData, AWS, s3 };