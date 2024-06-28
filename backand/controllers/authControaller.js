
const user = require('../models/user')





module.exports.user_post =async (req,res)=>{
    const newdata =  new user(req.body)
    const result = await newdata.save()
    res.send(result)
  
}













