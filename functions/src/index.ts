import * as functions from "firebase-functions";

export const hello = functions.https.onRequest((request, response) => {
  response.status(200).send("Hello");
});

export const helloWorld = functions.https.onRequest((request, response) => {
  response.status(200).send("Hello World");
});
