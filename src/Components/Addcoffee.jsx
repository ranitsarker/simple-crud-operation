import toast, { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";


const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault(); // jate form ta reload na dai
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const newCoffee = {name, quantity, category, photo, chef, taste, details};
        console.log(newCoffee);

        
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                toast.success('Coffee added successfully!')
                form.reset();
            }
        })
    }
    return (
        <>
        <div><Toaster/></div>
        <Navbar></Navbar>
            <div className="bg-gray-100 p-6">
                <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow-md">
                    <h1 className="text-2xl font-bold mb-4">Add Coffee</h1>

                    <form onSubmit={handleAddCoffee}>
                    <div className="grid grid-cols-2 gap-4">
                        {/* First Column */}
                        <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Coffee Name</label>
                        <input type="text" 
                        name="name" 
                        id="name" 
                        className="mt-1 p-2 w-full border rounded-md" />
                        </div>
                        <div className="mb-4">
                        <label htmlFor="supplier" className="block text-sm font-medium text-gray-700">Available Quantity </label>
                        <input type="text" 
                        name="quantity" 
                        id="supplier" 
                        className="mt-1 p-2 w-full border rounded-md" />
                        </div>
                        <div className="mb-4">
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                        <input type="text" 
                        name="category" 
                        id="category" 
                        className="mt-1 p-2 w-full border rounded-md" />
                        </div>
                        <div className="mb-4">
                        <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Photo</label>
                        <input type="text" 
                        name="photo" 
                        id="photo" 
                        className="mt-1 p-2 w-full border rounded-md" />
                        </div>
                    </div>

                    {/* Second Column */}
                    <div className="mb-4">
                        <label htmlFor="chef" className="block text-sm font-medium text-gray-700">Chef</label>
                        <input type="text" 
                        name="chef" 
                        id="chef" 
                        className="mt-1 p-2 w-full border rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="taste" className="block text-sm font-medium text-gray-700">Taste</label>
                        <input type="text" 
                        name="taste" 
                        id="taste" 
                        className="mt-1 p-2 w-full border rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="details" className="block text-sm font-medium text-gray-700">Details</label>
                        <textarea 
                        name="details" 
                        id="details" 
                        className="mt-1 p-2 w-full border rounded-md" />
                    </div>

                    <div className="mt-6">
                        <button type="submit" 
                        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600">Add Coffee</button>
                    </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddCoffee;