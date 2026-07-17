import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { createUser, getUser, deleteUser, updateUser } from '../service/api'

const Employee = () => {

    const [users, setUsers] = useState([])

    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        mobileNo: '',
        empId: '',
        designation: '',
        age: ''
    })

    const [isEdit, setIsEdit] = useState(false)
    const [userId, setUserId] = useState('')

    async function getUserData() {
        try {
            const response = await axios.get(getUser)
            setUsers(response.data.users)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUserData()
    }, []);

    function changeHandler(e) {
        let { name, value } = e.target

        setNewUser((preItem) => {
            return { ...preItem, [name]: value }
        })
    }

    async function handleCreateUser() {
        try {
            console.log("hello")
            const response = await axios.post(createUser, newUser)
            console.log(response)
            getUserData()

        } catch (error) {
            console.log(error)
        }
    }

    async function updatedUser() {
        try {

            const response = await axios.put(`${updateUser}/${userId}`, newUser)

            console.log(response)
            getUserData()
        } catch (error) {
            console.log(error)
        }
    }

    async function deleteHandler(userId) {
        try {
            const response = await axios.delete(`${deleteUser}/${userId}`);
            console.log(response.data);
            getUserData();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    }


    function submitHandler(e) {
        e.preventDefault()
        if (isEdit) {

            updatedUser()
        } else {
            handleCreateUser()
        }
    }

    async function editHandler(userId) {
        console.log(userId)
        setUserId(userId)
        setIsEdit(true)
    }

    return (
        <div className = "main-container">
            <div className="form-section">
                <h1>Employee Management System</h1>
                <form onSubmit={submitHandler}>
                    <label htmlFor="name">Name: </label>
                    <input onChange={changeHandler} name='name' placeholder='Name' />
                    <br />
                    <label htmlFor="email">Email: </label>
                    <input onChange={changeHandler} name='email' placeholder='Email' />
                    <br />
                    <label htmlFor="mobileNo">Mobile No.: </label>
                    <input onChange={changeHandler} name='mobileNo' placeholder='Mobile No' />
                    <br />
                    <label htmlFor="empId">Employee Id: </label>
                    <input onChange={changeHandler} name='empId' placeholder='Emp.Id' />
                    <br />
                    <label htmlFor="designation">Designation: </label>
                    <input onChange={changeHandler} name='designation' placeholder='Designation' />
                    <br />
                    <label htmlFor="age">Age: </label>
                    <input onChange={changeHandler} name='age' placeholder='Age' />
                    <br />
                    <button type='submit'>{isEdit ? "Update" : "Submit"}</button>
                </form>

            </div>
            <div className="card-section">
                {
                    users.map((item, i) => {
                        return <div className="employee-card" key={i}>
                            <p>Name: {item.name}</p>
                            <p>Email: {item.email}</p>
                            <p>MobileNo: {item.mobileNo}</p>
                            <p>Emp. Id: {item.empId}</p>
                            <p>Designation: {item.designation}</p>
                            <p>Age: {item.age}</p>
                            <div>
                                <button onClick={() => deleteHandler(item._id)}>Delete</button>
                                <button onClick={() => editHandler(item._id)}>Edit</button>
                            </div>
                            <hr />
                        </div>
                    })
                }
            </div>

        </div>
    )
}

export default Employee;
