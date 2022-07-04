const express = require('express')
const app = express()
const port = 443
const stripe = require("stripe")('sk_test_51JrsigAOaRtl8XJSVfUA8hcDAyvJ2LIuXHOu6eFrQ5eyp4GtV41CMVndxrBdiVm503PNZU3PjuxgksduUagoPXI400e3Kl0TWb');

app.get('/create',  async(req, res) => {

    const customer = await stripe.customers.create({
       email:"exaple1@domain.com",
      });
      console.log(customer);
  res.send({"customer": customer} )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



// const stripe = require("stripe")('');

// export default async function handler(req, res) {
//   let userdetails = JSON.parse(req.body);
  
//   let custCheck = await stripe.customers.list({
//     email: userdetails.email,
//   });

//   let data = { customer: null, errors: null };
//   if (custCheck.data.length <= 0) {
//     data.customer = await stripe.customers.create({
//       name: userdetails.email,
//       email: userdetails.email,
//     });
//   } else {
//     data.errors = "Email" + userdetails.email + "already exists";
//   }
//   res.status(200).json({ data });
// }