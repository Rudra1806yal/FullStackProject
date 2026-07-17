import mongoose from "mongoose";

const employees = new mongoose.Schema({
    name:{
        type:String,
        require: true
    },

    email:{
        type: String,
        required: true
    },

    mobileNo:{
        type: Number,
        required: true
    },

    empId:{
        type: Number,
        required: true
    },

    designation:{
        type: String,
        required: true
    },

    age:{
        type: Number,
        required: true
    }
})

const Employees = mongoose.model('Employees', employees)

export default Employees