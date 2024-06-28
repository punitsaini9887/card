const addprodect = require('../models/addprodect')



module.exports.addprodect_post = async(req,res)=>{
    const data = new addprodect(req.body)
    const result = await data.save()
    res.send(result)
}

// const newdata  = new StudentModle(req.body)
// const result = await newdata.save()
// res.send(result)




module.exports.prodect_finde =async(req,res)=>{
    const getdata = await addprodect.find({})
    res.send(getdata)
}



module.exports.productupdate_put = async(req,res)=>{
    const data = req.body
    const newdata = await addprodect.updateMany(req.params,data)
    res.send(newdata)
}




module.exports.prodectdelete_delete = async(req,res)=>{
    const data =  await addprodect.deleteOne(req.params)
    res.send(data)
}



module.exports.allprodectdelete_delete = async(req,res)=>{
    const data = await addprodect.deleteMany(req.params)
    res.send(data)
}


module.exports.prodectupdate = async(req,res)=>{
    const data = req.body
    const newdata = await addprodect.updateOne(req.params,data)
    res.send(newdata)
}


module.exports.prodectseacher = async (req,res)=>{
    const result = addprodect.find(
        {
            "$or":[
                {name:{$regex:req.params.key}},
                {price:{$regex:req.params.key}},
                {company:{$regex:req.params.key}},
                {brend:{$regex:req.params.key}},
            ]
        }
    )
}