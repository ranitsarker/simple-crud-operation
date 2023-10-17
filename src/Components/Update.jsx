import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";

const Update = () => {
    const loadedUser = useLoaderData();
    const handleUpdate = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);
        const updatedUser = {name, email};

        // data ke server side a send r kaj 
        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json' 
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                toast.success('User updated successfully!')
            }
        })

    }
    return (
        <>
        <div><Toaster/></div>
        <Navbar></Navbar>
            <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md w-96 text-left">
                <h1 className="text-2xl font-semibold mb-4">Update User</h1>
                <form onSubmit={handleUpdate}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                    Name
                    </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    defaultValue={loadedUser?.name}
                    className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                    Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    defaultValue={loadedUser?.email}
                    className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                    Update
                </button>
                </form>
            </div>
            </div>
        </>
    );
};

export default Update;