const AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = async (event) => {
  const emailParams = {
    Destination: { ToAddresses: ["user@example.com"] },
    Message: {
      Body: {
        Text: {
          Data: `Task "${event.title}" marked as Done.`,
        },
      },
      Subject: { Data: "Kanban Task Update" },
    },
    Source: "sender@example.com",
  };
  await ses.sendEmail(emailParams).promise();
};

