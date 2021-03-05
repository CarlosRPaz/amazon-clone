const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IROfODr36UfbIQZE8DIj5vVCi8VZ8V2JOcYttUEf7sq9ppPVufgzh3ug2l0Z9sTWACtjReiWv2DCGxfuaear33I00JK3xfSK2');

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello, world"));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved >>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of currency
        currency: "usd",
    })

    // 201 means... OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://127.0.0.1:5001/challenge-4e2fc/us-central1/api