// Import required modules
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Default route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

// PayFast Configuration
const PAYFAST_MERCHANT_ID = "10036039";
const PAYFAST_MERCHANT_KEY = "entbw784ynzth"; 
const PAYFAST_RETURN_URL = "http://localhost:3000/success";
const PAYFAST_CANCEL_URL = "http://localhost:3000/cancel";
const PAYFAST_NOTIFY_URL = "http://localhost:3000/ipn";
const PAYFAST_BASE_URL = "https://sandbox.payfast.co.za/eng/process"; // Sandbox URL for testing

// Payment Endpoint
app.post("/pay", (req, res) => {
    const { email, firstName, lastName, phone, address, service, totalAmount } = req.body;

    // Construct PayFast payment details
    const paymentData = {
        merchant_id: PAYFAST_MERCHANT_ID,
        merchant_key: PAYFAST_MERCHANT_KEY,
        return_url: PAYFAST_RETURN_URL,
        cancel_url: PAYFAST_CANCEL_URL,
        notify_url: PAYFAST_NOTIFY_URL,
        amount: parseFloat(totalAmount).toFixed(2),
        item_name: service,
        name_first: firstName,
        name_last: lastName,
        email_address: email,
    };

    // Generate payment URL
    const paymentUrl = `${PAYFAST_BASE_URL}?${new URLSearchParams(paymentData).toString()}`;
    res.json({ paymentUrl });    
});

// PayFast IPN Endpoint
app.post("/ipn", (req, res) => {
    console.log("IPN Data Received:", req.body);
    res.sendStatus(200); // Acknowledge IPN
});

// Success route for payment
app.get("/success", (req, res) => {
    res.sendFile(path.join(__dirname, "public/success.html"));
});

// Cancel route for payment
app.get("/cancel", (req, res) => {
    res.sendFile(path.join(__dirname, "public/cancel.html"));
});

// Start the Server
app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});