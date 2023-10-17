import { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import CoffeeCard from "./Coffeecard";
import { useState } from "react";

const Coffees = () => {
    const loadedcoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedcoffees);
    return (
        <>
        
        <div><Toaster/></div>
        <Navbar></Navbar>

        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md text-left w-full max-w-4xl">
                <h1 className="text-2xl font-semibold mb-4">coffees List</h1>
                <h2 className="text-2xl font-semibold mb-2">{coffees.length} coffees</h2>
                <div>
                    {
                        coffees.map(coffee => <CoffeeCard 
                            key={coffee._id}
                            coffee={coffee}
                            coffees={coffees}
                            setCoffees={setCoffees}
                            
                            
                            ></CoffeeCard>)
                    }
 
                
                </div>
            </div>
            </div>
        </>


    );
};

export default Coffees;