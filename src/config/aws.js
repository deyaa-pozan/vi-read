const AWS = require("aws-sdk");
const accessKeyId = 'AKIAV577MLLQ6QMGTDXV';
const secretAccessKey = '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';


// AWS sdk Config 
AWS.config.update({
    region: "eu-central-1",
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,

});

// PoolData of userpool from aws
const poolData = {
    UserPoolId: "eu-central-1_MmfbN9hF6", // Your user pool id here    
    ClientId: "uqbapga634sbomvl9vpc1jp85", // Your client id here

};

// S3 Config from aws 
const s3 = new AWS.S3({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey});

//kkkkjjgg
module.exports = { poolData, AWS, s3 };