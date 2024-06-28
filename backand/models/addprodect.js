const mongoose = require('mongoose')



const prodectschama  =new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        company:{
            type:String,
            required:true
        },
        remark:  {
            type:String,
            required:true
        },
        reting:{
            type:Number,
            required:true
        },
        stock:{
            type:Number,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        imgpath:[],

        
        cutprice:{
            type:Number,
            required:true
        },
        off:{
            type:Number,
            require:true
        },
        description:{
            type:String,
            required:true
        },

    }
)

const prodect = mongoose.model("prodect",prodectschama)


module.exports = prodect;
