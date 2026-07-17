import mongoose from "mongoose"

async function connectDb(){
    try{
        await mongoose.connect("mongodb://localhost:27017/employee_management_system")
        console.log('database connected successfully...')
    }catch(error){
        console.log('database has not been connected', error)
        process.exit(1)
    }
}

export default connectDb