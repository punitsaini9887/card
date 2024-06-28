const mongoose = require('mongoose')


const userschama = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },

})


const user = mongoose.model("user",userschama)

module.exports =user;
