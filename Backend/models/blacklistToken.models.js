const mongoose = require('mongoose')

const blacklistTokenSchema = new mongoose.Schema({
    token:{
        type:String,
        required:true,
        unique:true
    },
    createdAt:{
        type:Date,
        defaule:Date.now,
        expires:86400
    }
})

module.exports = mongoose.model("blacklistToken",blacklistTokenSchema)