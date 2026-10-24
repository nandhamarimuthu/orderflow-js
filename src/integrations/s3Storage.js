const AWS = require('aws-sdk');
function client() { return new AWS.S3({ region: process.env.AWS_REGION || 'us-east-1' }); }
function uploadFile(bucket, key, body) {
  return client().putObject({ Bucket: bucket, Key: key, Body: body, ACL: 'public-read' }).promise();
}
module.exports = { client, uploadFile };
