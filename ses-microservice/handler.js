'use strict';

const AWS = require("aws-sdk")
const ses = new AWS.SES();

module.exports.createContact = async (event, context) => {
  
  console.log("Received::: " , event);
  const {to, from, subject, message, senderName} = JSON.parse(event.body);

  if(!to || !from || !subject || !message || !senderName){
    return {
      headers:{
        'ContentType' : 'application/json',
        'Access-Control-Allow-Methods' : '*',
        'Access-Control-Allow-Origin' : '*',
      },
      statusCode:400,
      body: JSON.stringify({message:"to or from... are not set properly"})
    };

  }
  
  const params = {
    Destination:{
      ToAddresses: [to],
    },
    Message:{
      Body:{
        Text:{
          Data : `You just got a message from ${senderName} - ${from}: ${message}` 
        }
      },
      Subject:{Data: subject},

    },
    Source: to
  }
  try{
    await ses.sendEmail(params).promise();
    return {
      headers:{
        'ContentType' : 'application/json',
        'Access-Control-Allow-Methods' : '*',
        'Access-Control-Allow-Origin' : '*',
      },
      statusCode:200,
      body: JSON.stringify({
        message: "email sent successfully",
        success: true})
    };
  }catch(error){
    console.error(error);
    return{
      headers:{
        'ContentType' : 'application/json',
        'Access-Control-Allow-Methods' : '*',
        'Access-Control-Allow-Origin' : '*',
      },
       statusCode:400,
       body: JSON.stringify({
        message: "email sent unsuccessfully...",
        success: false})
    };
  }
};
