import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">DompetIQ</Link>
        </div>

        {/* Menu Navigasi */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-green-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/#tentang" className="hover:text-green-400">
              Tentang
            </Link>
          </li>
          <li>
            <Link to="/#fitur" className="hover:text-green-400">
              Fitur
            </Link>
          </li>
          <li>
            <Link to="/#tangkapan-layar" className="hover:text-green-400">
              Tangkapan Layar
            </Link>
          </li>
        </ul>

        {/* Tombol Masuk dan Daftar */}
        <div className="flex space-x-4">
          <Link
            to="/Masuk"
            className="border border-green-400 text-green-400 px-4 py-2 rounded hover:bg-green-400 hover:text-white"
          >
            Masuk
          </Link>
          <Link
            to="/Daftar"
            className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-500"
          >
            Daftar
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;