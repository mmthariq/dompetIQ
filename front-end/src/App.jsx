import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import KategoriPemasukan from "./pages/KategoriPemasukan";
import TransaksiTerjadwal from "./pages/TransaksiTerjadwal";
import TransaksiPage from "./pages/Transaksi"; // Tambahkan impor untuk TransaksiPage

// Layout agar Sidebar selalu muncul
const Layout = ({ children }) => (
  <div className="flex">
    {/* Sidebar */}
    <Sidebar />
    {/* Konten Utama */}
    <div className="ml-60 p-6 bg-gray-100 min-h-screen w-full overflow-y-auto">
      {children}
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/pengelolaan-kategori" element={<Layout><KategoriPemasukan /></Layout>} />
        <Route path="/transaksi-terjadwal" element={<Layout><TransaksiTerjadwal /></Layout>} />
        <Route path="/transaksi" element={<Layout><TransaksiPage /></Layout>} /> {/* Tambahkan rute ini */}
      </Routes>
    </Router>
  );
}

export default App;