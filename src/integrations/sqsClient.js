const AWS = require('aws-sdk');
async function send(queueUrl, payload) {
  return new AWS.SQS({ region: process.env.AWS_REGION || 'us-east-1' }).sendMessage({
    QueueUrl: queueUrl, MessageBody: JSON.stringify(payload)
  }).promise();
}
module.exports = { send };
