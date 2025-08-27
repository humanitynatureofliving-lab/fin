const express = require('express');
const stripe = require('stripe')('YOUR_STRIPE_SECRET_KEY');

const app = express();

app.post('/create-checkout-session', async (req, res) => {
  const amount = req.body.amount;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Donation'
          },
          unit_amount: amount * 100
        },
        quantity: 1
      }
    ],
    mode: 'payment',
    success_url: 'https:
        curl -v -X POST "https://api-m.sandbox.paypal.com/v1/oauth2/token"
 -u "CLIENT_ID:CLIENT_SECRET" \
 -H "Content-Type: application/x-www-form-urlencoded" \
 -d "grant_type=client_credentials"
                             
    cancel_url: '//example.com/success',
    cancel_url: 'https://example.com/cancel'
  });
  res.json();
});