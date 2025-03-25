import React, { useState, useEffect } from 'react';
// Import Material UI icons
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CategoryIcon from '@mui/icons-material/Category';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import HomeIcon from '@mui/icons-material/Home';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PetsIcon from '@mui/icons-material/Pets';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';

const BudgetForm = () => {
  const [activeTab, setActiveTab] = useState('single');
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    category: '',
    account: '',
    duration: '1 Bulan'
  });
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState(null);
  const navigate = useNavigate();

  // Income categories with Material UI icons and sublists
  const [incomeCategories, setIncomeCategories] = useState([
    { 
      name: 'Pendapatan Keuangan', 
      icon: AttachMoneyIcon,
      sublist: []
    },
    { 
      name: 'Pemasukan', 
      icon: AccountBalanceWalletIcon,
      sublist: [
        { name: 'Gaji' },
        { name: 'Part time job' }
      ]
    },
    { 
      name: 'Lain (Pemasukan)', 
      icon: AddIcon,
      sublist: [
        { name: 'Tabungan pribadi' }
      ]
    }
  ]);
  
  // Expense categories with Material UI icons and sublists
  const [expenseCategories, setExpenseCategories] = useState([
    { name: 'Makanan / Minuman', icon: RestaurantIcon, sublist: [] },
    { name: 'Berbelanja', icon: ShoppingCartIcon, sublist: [] },
    { 
      name: 'Transportasi', 
      icon: DirectionsCarIcon,
      sublist: [
        { name: 'Mobil' },
        { name: 'Motor' },
        { name: 'Bahan bakar' },
        { name: 'Asuransi' }
      ]
    },
    { name: 'Hiburan', icon: SportsEsportsIcon, sublist: [] },
    { 
      name: 'Rumah', 
      icon: HomeIcon,
      sublist: [
        { name: 'Tagihan listrik' },
        { name: 'Tagihan air' }
      ]
    },
    { 
      name: 'Keluarga', 
      icon: FamilyRestroomIcon,
      sublist: [
        { name: 'Anak' },
        { name: 'Istri' }
      ]
    },
    { name: 'Kesehatan / Olahraga', icon: FitnessCenterIcon, sublist: [] },
    { name: 'Hewan Peliharaan', icon: PetsIcon, sublist: [] },
    { 
      name: 'Liburan', 
      icon: BeachAccessIcon,
      sublist: [
        { name: 'Akomodasi' },
        { name: 'Transportasi' }
      ]
    },
    { 
      name: 'Lain (Pengeluaran)', 
      icon: MoreHorizIcon,
      sublist: [
        { name: 'Pajak' }
      ]
    }
  ]);

  const durations = [
    '1 Minggu',
    '1 Bulan',
    'Lainnya'
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Navigate to anggaran page
    navigate('/anggaran');
  };

  const handleCancel = () => {
    // Navigate to anggaran page
    navigate('/anggaran');
  };

  const openCategoryModal = () => {
    setShowCategoryModal(true);
  };

  const closeCategoryModal = () => {
    setShowCategoryModal(false);
  };

  const selectCategory = (category, subcategory = null) => {
    const selectedCategory = subcategory 
      ? `${category.name} - ${subcategory.name}` 
      : category.name;
    
    setFormData({
      ...formData,
      category: selectedCategory
    });
    closeCategoryModal();
  };

  const toggleExpandCategory = (categoryName) => {
    if (expandedCategory === categoryName) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryName);
    }
  };

  const filteredCategories = [...expenseCategories].filter(category => 
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md shadow-lg bg-white rounded">
        <div className="p-0">
          <div className="text-center font-semibold text-xl p-4 border-b">
            BUAT ANGGARAN BARU
          </div>

          {/* Tabs */}
          <div className="grid grid-cols-3 border-b">
            <button
              className={`py-3 px-2 text-sm ${activeTab === 'single' ? 'bg-white' : 'bg-gray-100'}`}
              onClick={() => handleTabChange('single')}
            >
              Kategori Tunggal 
            </button>
            <button
              className={`py-3 px-2 text-sm ${activeTab === 'multi' ? 'bg-white' : 'bg-gray-100'}`}
              onClick={() => handleTabChange('multi')}
            >
              Multi Kategori
            </button>
            <button
              className={`py-3 px-2 text-sm ${activeTab === 'all' ? 'bg-white' : 'bg-gray-100'}`}
              onClick={() => handleTabChange('all')}
            >
              Semua Kategori
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-4">
            {/* Name (only in Multi-category) */}
            {activeTab === 'multi' && (
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <div className="mr-4 text-gray-700">
                    <AccountBalanceIcon />
                  </div>
                  <label className="block text-sm font-medium">Name</label>
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan nama"
                />
              </div>
            )}

            {/* Budget Amount */}
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <div className="mr-4 text-gray-700">
                  <AttachMoneyIcon />
                </div>
                <label className="block text-sm font-medium">Jumlah Anggaran</label>
              </div>
              <div className="flex">
                <input
                  type="text"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan jumlah"
                />
                <span className="p-2 border border-l-0 rounded-r bg-white">Rp</span>
              </div>
            </div>

            {/* Category */}
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <div className="mr-4 text-gray-700">
                  <CategoryIcon />
                </div>
                <label className="block text-sm font-medium">Kategori</label>
              </div>
              {activeTab === 'all' ? (
                <div className="p-2 bg-gray-100 border rounded">Semua Kategori</div>
              ) : (
                <div 
                  onClick={openCategoryModal} 
                  className="w-full p-2 border rounded focus:outline-none cursor-pointer bg-white"
                >
                  {formData.category ? formData.category : 'Pilih Kategori'}
                </div>
              )}
            </div>

            {/* Account - now editable */}
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <div className="mr-4 text-gray-700">
                  <AccountBalanceWalletIcon />
                </div>
                <label className="block text-sm font-medium">Sumber</label>
              </div>
              <input
                type="text"
                name="account"
                value={formData.account}
                onChange={handleInputChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan sumber dana"
              />
            </div>

            {/* Duration - now shown in all tabs */}
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <div className="mr-4 text-gray-700">
                  <AccessTimeIcon />
                </div>
                <label className="block text-sm font-medium">Durasi</label>
              </div>
              <select
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {durations.map((duration, index) => (
                  <option key={index} value={duration}>{duration}</option>
                ))}
              </select>
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-2 mt-6">
              <button
                type="button"
                className="px-4 py-2 text-green-500 rounded hover:bg-blue-50"
                onClick={handleCancel}
              >
                BATAL
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                SIMPAN
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Category Selection Modal */}
      {showCategoryModal && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          {/* Modal Backdrop - changed to fully transparent to show the budget form */}
          <div className="absolute inset-0 bg-transparent"></div>
          
          <div className="w-full max-w-md rounded shadow-lg z-10 " style={{ backgroundColor: '#f7f7f7' }}>
            <div className="text-center font-semibold text-xl p-4 border-b">
              SELECT CATEGORY
            </div>
            
            {/* Search Bar */}
            <div className="p-4 border-b flex">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-2 border rounded-l focus:outline-none"
                placeholder="Search..."
              />
              <button className="bg-green-500 text-white px-3 rounded-r">
                <SearchIcon />
              </button>
            </div>
            
            {/* Categories List */}
            <div className="max-h-80 overflow-y-auto">
              {filteredCategories.map((category, index) => (
                <div key={index} className="border-b">
                  <div
                    className="flex items-center p-3 cursor-pointer hover:bg-gray-100"
                    onClick={() => category.sublist.length > 0 
                      ? toggleExpandCategory(category.name) 
                      : selectCategory(category)}
                  >
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      {React.createElement(category.icon, { className: "text-green-500" })}
                    </div>
                    <div className="flex-grow">{category.name}</div>
                    {category.sublist.length > 0 && (
                      <ExpandMoreIcon className={`transform ${expandedCategory === category.name ? 'rotate-180' : ''}`} />
                    )}
                  </div>
                  
                  {/* Sublist items if expanded */}
                  {expandedCategory === category.name && category.sublist.length > 0 && (
                    <div className="pl-16 bg-gray-50">
                      {category.sublist.map((subcategory, subIdx) => (
                        <div
                          key={subIdx}
                          className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                          onClick={() => selectCategory(category, subcategory)}
                        >
                          {subcategory.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Modal Footer */}
            <div className="p-4 flex justify-end">
              <button
                onClick={closeCategoryModal}
                className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BudgetForm;