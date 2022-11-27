const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
 const {body, validationResult} = require('express-validator')
const {secret} = require('../config')


    const generateAccessToken = (id, roles) => {
       const payload = {
         id,
         roles
       }
       return jwt.sign(payload,secret,  {expiresIn: '24h'} )
    }


    router.post("/register",
 
     body('name').notEmpty(),
      body('email').isEmail(),
     body('password').matches(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,20}$/),

     async (req, res) => {
   
            const name = req.body.name
            const email = req.body.email
            const password = req.body.password
   const errors = validationResult(req)
   if(!errors.isEmpty()) {
      return res.status(400).json({message: 'sxal grancumic', errors})
 }  
       const candidate = await User.findOne({email})
                  if(candidate){
                    return res.status(400).json({message: 'Email already registred'})  
                   }  
      
      const hashPassword = bcrypt.hashSync(password, 7);
       const user = new User({ name, email, password: hashPassword })
            console.log( name, email, password)
      try {
         user.save()
         res.send('User Registered successfully')
      }
      catch (error) {
         return res.status(400).json({ message: error });
      }
});



router.post("/login", async(req, res) => {
   try {
      const { email, password } = req.body
    
         const user = await User.findOne({ email })
         console.log(User)
         
            if(!user) {
               return res.status(400).json({message: 'Ayspisi ${email} chka'  })
            }

            const validPassword = bcrypt.compareSync(password, user.password)
            if(!validPassword){
               return res.status(400).json({message: 'Sxal password'  })
            }
            const token = generateAccessToken(user._id, user.roles)
            return res.json({token})

         // if (user.length > 0) {
            
         //    const currentUser = {
         //          name: user[0].name,
         //          email: user[0].email,
         //          isAdmin: user[0].isAdmin,
         //          _id: user[0]._id
         //       }
         //    res.send(currentUser);
         
         // }
         // else {
         //    return res.status(400).json({ message: 'User Login Failed' });
         // }
      } catch (error) {
         return res.status(400).json({ message: 'Something went wrong' });
      }
})
 
   
 


module.exports = router