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
    UserPoolId: "eu-central-1_MmfbN9hF6", // Your user pool id here    
    ClientId: "uqbapga634sbomvl9vpc1jp85", // Your client id here

};

// S3 Config from aws 
const s3 = new AWS.S3({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey});

//kkkkjjgg
module.exports = { poolData, AWS, s3 };