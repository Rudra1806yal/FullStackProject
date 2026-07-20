import mongoose from "mongoose"

async function connectDb(){
    try{
        await mongoose.connect("mongodb://fullStackDeveloper:rudra1234@ac-7zmjdzq-shard-00-00.bzunkgz.mongodb.net:27017,ac-7zmjdzq-shard-00-01.bzunkgz.mongodb.net:27017,ac-7zmjdzq-shard-00-02.bzunkgz.mongodb.net:27017/?ssl=true&replicaSet=atlas-v88o7k-shard-0&authSource=admin&appName=Cluster0")

        console.log('database connected successfully...')
    }catch(error){
        console.log('database has not been connected', error)
        process.exit(1)
    }
}

export default connectDb