import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    const handleUserDelete = _id =>{
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
                if(data.deletedCount > 0){
                    const remaining = users.filter(user =>user._id !== _id);
                    // (joto gulo user ache, ar modde loop kore je ta ke ami delete korte chaitaci oita bad a baki gulo ke naoya )
                    setUsers(remaining);
                    toast.success('User deleted successfully!');
            }
        })

    }
    return (
        <>
        <div><Toaster/></div>
        <Navbar></Navbar>
            <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md text-left">
                <h1 className="text-2xl font-semibold mb-4">User List</h1>
                <h2 className="text-2xl font-semibold mb-2">{users.length} Users</h2>
                <div>
                {users.map((user) => (
                    <p key={user._id} className="mb-2">
                    <span className="font-semibold">{user.name},</span> {user.email}
                    <Link to={`/update/${user._id}`} className="border mx-3 px-2 py-0 bg-red-400">
                        Update
                    </Link>
                    <button onClick={() => handleUserDelete(user._id)} className="border mx-3 px-2 py-0 bg-red-400">X</button>
                    </p>
                ))}
                </div>
            </div>
            </div>
        </>
    );
};

export default Users;