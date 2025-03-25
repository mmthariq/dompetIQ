import React, { useState, useRef, useEffect } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// Removed duplicate declaration of HalamanTransaksi
const HalamanTransaksi = () => {
  const [showIncomeForm, setShowIncomeForm] = useState(false);
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua Kategori');
  const [activeTransactionId, setActiveTransactionId] = useState(null);
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      category: 'BPJS Kesehatan',
      subcategory: 'Rekening Bank',
      date: '12/03/2025',
      amount: 3600000
    },
    {
      id: 2,
      category: 'Pembayaran Online',
      subcategory: 'Dompet',
      date: '12/03/2025',
      amount: 1200000
    },
    {
      id: 3,
      category: 'Hiburan',
      subcategory: 'Rekening Bank',
      date: '11/03/2025',
      amount: 300000
    },
    {
      id: 4,
      category: 'Bahan Bakar',
      subcategory: 'Dompet',
      date: '10/03/2025',
      amount: 260000
    },
    {
      id: 5,
      category: 'Makan di Luar',
      subcategory: 'Dompet',
      date: '10/03/2025',
      amount: 150000
    },
    {
      id: 6,
      category: 'Teknologi',
      subcategory: 'Rekening Bank',
      date: '10/03/2025',
      amount: 950000
    },
    {
      id: 7,
      category: 'Hadiah',
      subcategory: 'Dompet',
      date: '09/03/2025',
      amount: 270000
    },
    {
      id: 8,
      category: 'Gaji',
      subcategory: 'Rekening Bank',
      date: '09/03/2025',
      amount: 12000000
    },
    {
      id: 9,
      category: 'Buku / Majalah',
      subcategory: 'Dompet',
      date: '08/03/2025',
      amount: 64000
    },
    {
      id: 10,
      category: 'Sepatu, Pakaian',
      subcategory: 'Rekening Bank',
      date: '07/03/2025',
      amount: 450000
    }
  ]);
  
  // Create refs for the forms
  const incomeFormRef = useRef(null);
  const expenseFormRef = useRef(null);
  const categoryModalRef = useRef(null);
  
  // Category data
  const categoryData = [
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
  ];

  // Filter categories based on search query
  const filteredCategories = categoryData.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.sublist.some(sub => sub.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Toggle expanded category
  const toggleExpandCategory = (categoryName) => {
    if (expandedCategory === categoryName) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryName);
    }
  };

  // Select a category
  const selectCategory = (category, subcategory = null) => {
    if (subcategory) {
      setSelectedCategory(`${category.name} - ${subcategory.name}`);
    } else {
      setSelectedCategory(category.name);
    }
    setShowCategoryModal(false);
    setExpandedCategory(null);
  };

  // Close the category modal
  const closeCategoryModal = () => {
    setShowCategoryModal(false);
    setExpandedCategory(null);
    setSearchQuery('');
  };
  
  // Function to handle outside clicks
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showIncomeForm && incomeFormRef.current && !incomeFormRef.current.contains(event.target)) {
        setShowIncomeForm(false);
      }
      if (showExpenseForm && expenseFormRef.current && !expenseFormRef.current.contains(event.target)) {
        setShowExpenseForm(false);
      }
      if (showCategoryModal && categoryModalRef.current && !categoryModalRef.current.contains(event.target)) {
        closeCategoryModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    // Add body scroll lock when forms are open
    if (showIncomeForm || showExpenseForm || showCategoryModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [showIncomeForm, showExpenseForm, showCategoryModal]);
  
  // Function to get current date in DD/MM/YYYY format
  const getCurrentDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    
    return `${day}/${month}/${year}`;
  };
  
  // Function to get current time in HH:MM format
  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    return `${hours}:${minutes}`;
  };

  // Reusable TransactionForm component to reduce code duplication
  const TransactionForm = ({ 
    title, 
    color,
    formRef, 
    onClose, 
    fromToLabel, 
    isIncome 
  }) => (
    <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
      <div 
        ref={formRef}
        className="bg-white w-full max-w-md rounded-lg shadow-xl p-5 max-h-[90vh] overflow-y-auto"
        style={{ maxHeight: '90vh' }}
      >
        <div className="flex justify-between items-center mb-4 sticky top-0 bg-white pt-1 pb-3 border-b">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <CloseIcon fontSize="small" />
          </button>
        </div>
        
        <div className="space-y-4">
          {/* Kategori */}
          <div>
            <label className="block text-sm font-medium mb-1">Kategori</label>
            <div className="relative">
              <input 
                type="text" 
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 focus:outline-none"
                placeholder="Pilih Kategori"
                style={{ focus: { ringColor: color } }}
                onClick={() => setShowCategoryModal(true)}
              />
              <KeyboardArrowDownIcon 
                className="absolute right-3 top-3 text-gray-400"
              />
            </div>
          </div>

          {/* Nilai */}
          <div>
            <label className="block text-sm font-medium mb-1">Nilai</label>
            <div className="flex items-center relative">
              <input 
                type="text" 
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 focus:outline-none"
                inputMode="numeric"
              />
              <span className="absolute right-3 text-gray-600">Rp</span>
            </div>
          </div>

          {/* Conditional: Return funds checkbox for income only */}
          {isIncome && (
            <div className="flex items-center pl-1">
              <input type="checkbox" id="pengembalianDana" className="w-4 h-4 mr-2" />
              <label 
                htmlFor="pengembalianDana" 
                className="text-sm text-gray-700"
              >
                Apakah pengembalian dana?
              </label>
            </div>
          )}

          {/* Total */}
          <div className="flex justify-between py-2 border-t border-b">
            <span className="text-sm font-medium">Total:</span>
            <span className="font-semibold">Rp 0</span>
          </div>

          {/* Rekening */}
          <div>
            <label className="block text-sm font-medium mb-1">Rekening</label>
            <div className="relative">
              <select className="w-full p-3 border rounded-lg appearance-none bg-white focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 focus:outline-none">
                <option>Dompet</option>
                <option>Rekening Bank</option>
              </select>
              <KeyboardArrowDownIcon 
                className="absolute right-3 top-3 text-gray-400 pointer-events-none"
              />
            </div>
          </div>

          {/* Checkbox for "Dicintang" */}
          <div className="flex items-center pl-1">
            <input 
              type="checkbox" 
              id={`dicintang${isIncome ? 'Income' : 'Expense'}`} 
              className="w-4 h-4 mr-2" 
            />
            <label 
              htmlFor={`dicintang${isIncome ? 'Income' : 'Expense'}`} 
              className="text-sm text-gray-700"
            >
              Dicintang
            </label>
          </div>

          {/* Tanggal */}
          <div>
            <label className="block text-sm font-medium mb-1">Tanggal</label>
            <div className="relative">
              <input 
                type="text" 
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 focus:outline-none"
                defaultValue={getCurrentDate()}
              />
              <CalendarTodayIcon 
                className="absolute right-3 top-3 text-gray-400"
              />
            </div>
          </div>

          {/* Waktu */}
          <div>
            <label className="block text-sm font-medium mb-1">Waktu</label>
            <input 
              type="text" 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 focus:outline-none"
              defaultValue={getCurrentTime()}
            />
          </div>

          {/* From/To (Conditional label) */}
          <div>
            <label className="block text-sm font-medium mb-1">{fromToLabel} (Opsional)</label>
            <input 
              type="text" 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 focus:outline-none"
            />
          </div>

          {/* Catatan (Opsional) */}
          <div>
            <label className="block text-sm font-medium mb-1">Catatan (Opsional)</label>
            <textarea 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 focus:outline-none h-24 resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3 mt-6 sticky bottom-0 pb-1 pt-3 bg-white border-t">
            <button 
              onClick={onClose}
              className={`px-5 py-2.5 border border-${color}-500 rounded-lg text-${color}-500 font-medium hover:bg-${color}-50 transition-colors`}
              style={{ color: isIncome ? '#10B981' : '#EF4444', borderColor: isIncome ? '#10B981' : '#EF4444' }}
            >
              Batal
            </button>
            <button 
              className={`px-5 py-2.5 bg-${color}-500 text-white rounded-lg font-medium hover:bg-${color}-600 transition-colors`}
              style={{ backgroundColor: isIncome ? '#10B981' : '#EF4444' }}
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const handleToggleOptions = (transactionId) => {
    if (activeTransactionId === transactionId) {
      setActiveTransactionId(null);
    } else {
      setActiveTransactionId(transactionId);
    }
  };

  const handleEditTransaction = (transaction) => {
    setEditingTransaction(transaction);
  };

  const handleDeleteTransaction = (transactionId) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus transaksi ini?")) {
      const updatedTransactions = transactions.filter((t) => t.id !== transactionId);
      setTransactions(updatedTransactions);
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen p-4 gap-4">
      {/* Left Panel - Transaction History */}
      <div className="w-2/3 bg-white p-4 shadow-md rounded-lg">
        <h1 className="text-lg font-medium mb-4">Riwayat Transaksi</h1>
        
        <div className="space-y-1">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center p-3 hover:bg-gray-50 border-b cursor-pointer transition-colors relative"
            >
              {/* Main content */}
              <div className="flex-1">
                <div className="font-medium">{transaction.category}</div>
                <div className="text-gray-500 text-sm">{transaction.subcategory}</div>
              </div>

              {/* Date */}
              <div className="text-sm text-gray-600 mr-4">{transaction.date}</div>

              {/* Amount */}
              <div
                className={`text-right mr-2 font-medium ${
                  transaction.id === 8 ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {transaction.id === 8 ? '+' : '-'} Rp {transaction.amount.toLocaleString()}
              </div>

              {/* More Options Button */}
              <button
                className="p-1 hover:bg-gray-100 rounded-full"
                onClick={() => handleToggleOptions(transaction.id)}
              >
                <MoreVertIcon fontSize="small" />
              </button>

              {/* Options Dropdown */}
              {activeTransactionId === transaction.id && (
  <div className="absolute right-0 top-10 bg-white shadow-md rounded-lg p-2 z-10">
    <button
      className="flex items-center w-full px-3 py-2 hover:bg-gray-100 rounded-md"
      onClick={() => handleEditTransaction(transaction)}
    >
      <EditIcon fontSize="small" className="mr-2" />
      Edit
    </button>
    <button
      className="flex items-center w-full px-3 py-2 hover:bg-gray-100 rounded-md"
      onClick={() => handleDeleteTransaction(transaction.id)}
    >
      <DeleteIcon fontSize="small" className="mr-2" />
      Hapus
    </button>
  </div>
)}
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center items-center mt-4 gap-2">
          <span className="text-sm text-gray-600">1-10 dari 20 item</span>
          <div className="flex">
            <button className="w-8 h-8 bg-green-500 text-white rounded-md flex items-center justify-center">
              1
            </button>
            <button className="w-8 h-8 bg-white border text-gray-600 rounded-md flex items-center justify-center ml-1 hover:bg-gray-50">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center ml-1 hover:bg-gray-50 rounded-md">
              <KeyboardArrowRightIcon fontSize="small" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Right Panel - Filter */}
      <div className="w-1/3 bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Sorting</h2>
        </div>
        
        {/* Tanggal */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Tanggal</label>
          <div className="relative">
            <input 
              type="text" 
              placeholder="DD/MM/YYYY" 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 focus:outline-none"
            />
            <CalendarTodayIcon 
              fontSize="small" 
              className="absolute right-3 top-3 text-gray-400"
            />
          </div>
        </div>
        
        {/* Kategori */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Kategori</label>
          <div className="relative">
            <button 
              className="w-full p-3 border rounded-lg appearance-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 focus:outline-none bg-white text-left flex justify-between items-center"
              onClick={() => setShowCategoryModal(true)}
            >
              <span>{selectedCategory}</span>
              <KeyboardArrowDownIcon className="text-gray-400" />
            </button>
          </div>
        </div>
        
        {/* Catatan */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Catatan</label>
          <input 
            type="text" 
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 focus:outline-none"
            placeholder="Cari dalam catatan"
          />
        </div>
        
        {/* Tipe */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Tipe</label>
          <div className="flex flex-col gap-2 ml-1">
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="pengeluaran" 
                className="w-4 h-4 mr-2" 
              />
              <label htmlFor="pengeluaran" className="text-sm">Pengeluaran</label>
            </div>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="pemasukan" 
                className="w-4 h-4 mr-2" 
              />
              <label htmlFor="pemasukan" className="text-sm">Pemasukan</label>
            </div>
          </div>
        </div>
        
        {/* Apply Filters Button */}
        <button className="w-full mt-4 p-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors">
          Terapkan Filter
        </button>
      </div>
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3">
        <button 
          className="w-14 h-14 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors"
          onClick={() => setShowIncomeForm(true)}
          aria-label="Tambah Pemasukan"
        >
          <AddIcon fontSize="medium" />
        </button>
        <button 
          className="w-14 h-14 bg-red-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-600 transition-colors"
          onClick={() => setShowExpenseForm(true)}
          aria-label="Tambah Pengeluaran"
        >
          <RemoveIcon fontSize="medium" />
        </button>
      </div>

      {/* Render Income/Expense Forms based on state */}
      {showIncomeForm && (
        <TransactionForm
          title="Pemasukan Baru"
          color="green"
          formRef={incomeFormRef}
          onClose={() => setShowIncomeForm(false)}
          fromToLabel="Dari"
          isIncome={true}
        />
      )}
      
      {showExpenseForm && (
        <TransactionForm
          title="Pengeluaran Baru"
          color="red"
          formRef={expenseFormRef}
          onClose={() => setShowExpenseForm(false)}
          fromToLabel="Kepada"
          isIncome={false}
        />
      )}
      
      {/* Category Selection Modal */}
      {showCategoryModal && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          {/* Modal Backdrop */}
          <div className="absolute inset-0  bg-opacity-50"></div>
          
          <div 
            ref={categoryModalRef}
            className="w-full max-w-md rounded shadow-lg z-10 relative"
            style={{ backgroundColor: '#f7f7f7' }}
          >
            <div className="text-center font-semibold text-xl p-4 border-b">
              PILIH KATEGORI
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

     {editingTransaction && (
  <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-sm">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-lg font-semibold mb-4">Edit Transaksi</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // Simpan perubahan transaksi
          const updatedTransactions = transactions.map((t) =>
            t.id === editingTransaction.id ? editingTransaction : t
          );
          setTransactions(updatedTransactions);
          setEditingTransaction(null); // Tutup form
        }}
      >
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Kategori</label>
          <input
            type="text"
            value={editingTransaction.category}
            onChange={(e) =>
              setEditingTransaction({ ...editingTransaction, category: e.target.value })
            }
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Subkategori</label>
          <input
            type="text"
            value={editingTransaction.subcategory}
            onChange={(e) =>
              setEditingTransaction({ ...editingTransaction, subcategory: e.target.value })
            }
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Jumlah</label>
          <input
            type="number"
            value={editingTransaction.amount}
            onChange={(e) =>
              setEditingTransaction({ ...editingTransaction, amount: parseInt(e.target.value) })
            }
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={() => setEditingTransaction(null)}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Batal
          </button>
          <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
            Simpan
          </button>
        </div>
      </form>
    </div>
  </div>
)}
    </div>
  );
};

export default HalamanTransaksi;