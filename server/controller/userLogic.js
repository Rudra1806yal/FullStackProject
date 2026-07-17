import Employees from '../model/schema.js'

//logic for creating user
const createUser = async (req, res) => {

    try {
        const { name, email, mobileNo,empId, designation, age } = req.body

        if (!name || !email || !mobileNo ||!empId || !designation || !age) {
            return res.status(404).json({
                message: 'data not found'
            })
        }
        //data creation

        const user = await Employees.create({ name, email, mobileNo,empId, designation, age })

        console.log(user)
        
        //send response to user

        res.status(200).json({
            success: true,
            message: 'data created successfully...',
            user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'data has not created', error
        })
    }
}

//logic for getting user

const getUser = async (req, res) => {
    try {
        const users = await Employees.find()
        res.status(200).json({
            success: true,
            message: "data is fetch successfully...", users
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "data is not fetch successfully...", error
        })
    }
}

//logics for getting update
const updateUser = async (req, res) => {
    try {
        let { name, email, mobileNo,empId, designation, age } = req.body
        let { userId } = req.params

        if (!userId) {
            res.status(404).json({
                success: false,
                message: "user id not found for the updation"
            })
        }
        let user = await Employees.findOneAndUpdate({_id:userId},{name, email, mobileNo,empId, designation, age},{returnDocument:true})

        if (!user) {
            return res.status(404).json({
                message: "user not found...",
                success: false
            })
        }

        return res.status(200).json({message:"updated successfully"})


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Data is not updated", error
        })
    }
}

//logic for deleting the data
const deleteUser = async (req, res) => {
    try {
        const { userId } = req.params
        let deleteduser = await Employees.findByIdAndDelete(userId)

        res.status(200).json({
            success: true,
            message: 'user deleted successfully....',deleteduser
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'failed to delete user'
        })
    }
}

export { createUser, getUser, updateUser, deleteUser }