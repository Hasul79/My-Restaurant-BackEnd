const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const stripe = require("stripe")("sk_test_51M3yf9Kjj4lP0pf1hIZMaR9fPrKr0CsKFu7vbo4mWMFVmiuUlbrAnuMS5UTwLYRRh0wagBOmHPNs3BbNJzMaVvr800lT0Ohobp")

const Order = require('../models/orderModel')

router.post("/placeorder", async (req, res) => {

    const {token, subtotal, currentUser, cartItems} = req.body

    try {

        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })

        const payment = await stripe.charges.create({
            amount: subtotal*100,
            currency: 'AMD',
            customer: customer.id,
            receipt_email: token.email
        }, {
            idempotencyKey: uuidv4()
        })

        if (payment) {

             const neworder = new Order({
                           name: currentUser.name,
                          email: currentUser.email,
                         userid: currentUser._id,
                     orderItems: cartItems,
                    orderAmount: subtotal,
                shippingAddress: {
                         street: token.card.address_line1,
                           city: token.card.address_city,
                        country: token.card.address_country,
                        pincode: token.card.address_zip,
                },
                  transactionId: payment.source.id
            })
             // console.log(newOrder)
             
            neworder.save()

            res.send('Order placed successfully')
        }
        else {
            res.sendFile('Payment failed')
        }

    } catch (error) {
        return res.status(400).json({ message: 'Something went wrong' + error })
    }


});


router.post("/getuserorders" , async(req, res) => {
    const { userid } = req.body 
    
  //  console.log(userId )

 try {
     const orders = await Order.find({userid : userid}).sort({_id : -1})
                                                      
     res.send(orders)

  // console.log(orders)
  //  console.log(userId)

 }catch(error){
     return res.status(400).json({message : 'Something went wrong'});
 }

});


module.exports = router