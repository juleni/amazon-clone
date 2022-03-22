const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { default: Stripe } = require("stripe");
const stripe = require("stripe")(
  "sk_test_51KdzwaF9THjM6oCRJdgMkVEffq9QjEP7gMqNGKhu6sGB1DJNH25RuNt1KsMcFFiuttLI2ZdyglATAL0P8WI0QzTK000wPz391i"
);

// API

// - App config
const app = express();

// - Middleware
// eslint-disable-next-line object-curly-spacing
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
// app.get("/", (req, res) => res.status(200).send("Hello world!"));
// app.get("/juleni", (req, res) => res.status(200).send("Hello JULENI!"));
app.post("/payments/create", async (req, res) => {
  try {
    const total = Math.round(req.query.total);
    if (total > 0) {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // Specify amount here
        currency: "usd", // Specify currency here
      });

      // Return client secret, status code and message to client
      res.status(201).send({
        clientSecret: paymentIntent.client_secret,
        message: "Payment received",
      });
    } else {
      // Return error status code and message to client
      res.status(400).send({
        message: "Payment cannot be 0.",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// - Listen command
exports.api = functions.https.onRequest(app);

// firebase emulators:start
// example endpoint
// http://localhost:5001/challenge-507b1/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
