const jwt = require('jsonwebtoken')
const User = require('../models/userModel')


const authentication = async(req , res , next) => {
    
    const {authorization} = req.headers

    if(!authorization) {
      return   res.status(400).json({message:' authorization token required'})
    }
    const token = authorization.split(' ')[1]
  
    
    try{
        const decodedToken = jwt.verify(token , process.env.SECRET)
        req.user = decodedToken
       
      
        next()
     }
     
     catch(error){
        res.status(401).json({message: 'not authorized'})
     }
     
    
}

module.exports = authentication