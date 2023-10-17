import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Home</Link>
        <ul className="flex space-x-4">
          <li><Link to="/users" className="text-white hover:text-blue-300">Users</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
