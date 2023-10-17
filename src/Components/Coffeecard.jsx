import PropTypes from 'prop-types';
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, category, chef, taste, details, photo } = coffee;

  const handleCoffeeDelete = _id => {
    console.log(_id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log('delete confirm');


        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: 'DELETE'
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data);
        if(data.deletedCount > 0){
          Swal.fire(
            'Deleted!',
            'Your coffee has been deleted.',
            'success'
          )
          const remaining = coffees.filter(coffee => coffee._id !== _id);
          setCoffees(remaining);
        }
      })
      }
    });
  };
  

  return (
    <div className="max-w-full mx-auto bg-yellow-500 rounded-lg shadow-md p-4 md:flex md:p-0 my-4">
      {/* First Column: Image */}
      <div className="w-full md:w-1/3">
        <img src={photo} alt={name} className="object-cover h-48 w-full rounded-lg md:rounded-lg" />
      </div>

      {/* Second Column: Coffee Information */}
      <div className="w-full md:w-1/3 p-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p>
          <span className="font-semibold">Quantity:</span> {quantity}
        </p>
        <p>
          <span className="font-semibold">Category:</span> {category}
        </p>
        <p>
          <span className="font-semibold">Chef:</span> {chef}
        </p>
        <p>
          <span className="font-semibold">Taste:</span> {taste}
        </p>
        <p>
          <span className="font-semibold">Details:</span> {details}
        </p>
      </div>

      {/* Third Column: Buttons */}
      <div className="w-full md:w-1/3 p-4">
        <div className="mb-2">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md w-full">View</button>
        </div>
        <div className="mb-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">Update</button>
        </div>
        <div>
          <button onClick={() => handleCoffeeDelete(_id)} className="bg-red-500 text-white px-4 py-2 rounded-md w-full">Delete</button>
        </div>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    chef: PropTypes.string.isRequired,
    taste: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
};

export default CoffeeCard;
// https://i.ibb.co/BjqzMc5/images-1.jpg
// https://i.ibb.co/8N83yQq/photo-1514432324607-a09d9b4aefdd.jpg
// https://i.ibb.co/nnPp4yG/1564517252380.jpg
// https://i.ibb.co/hmLQ1Dt/Cup-Of-Creamy-Coffee-500x375.png
// https://i.ibb.co/PrpymhF/flat-white-3402c4f.jpg