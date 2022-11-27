// const User = require('./models/userModel')
// const bcrypt = require('bcrypt');
// const {validationResult} = require('express-validator')

// class authController {
//     async register(req, res){
//         try{
//              const errors = validationResult(req)
//         if(!errors.isEmpty()) {
//            return res.status(400).json({message: 'sxal grancumic', errors})
//       }  
//             const { name, email, password } = req.body
//             const candidate = await User.findOne({name})
//             if(candidate){
//               return res.status(400).json({message: 'Ays anunov user arden ka'})  
//              }

//              const hashPassword = bcrypt.hashSync(password, 7);
//            const user = new User({ name, email, password: hashPassword })
//               await user.save()
//                 return res.json({message: "Registracian hajox e yntacel"})

//           }catch(e){
//                 console.log(e)
//                 res.status(400).json({message: 'Register error'})
//         }
//             }
        
   
//     async login(req, res){
//         try{

//         }catch(e){
//              console.log(e)
//             res.status(400).json({message: 'Login error'})
//         }
//             }
        
   
//     async getUsers(req, res){
//         try{
//         res.json("server word")
//         }catch(e){
    
//            }
//          }
// }

// module.exports = new authController()