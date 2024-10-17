const mongoose=require('mongoose')
const LoginSchema=mongoose.Schema({
    emailid:{
        type:String
    },
    password:{
        type: String
    }

})
const Loginmodel=mongoose.model('task data',LoginSchema)
module.exports=Loginmodel