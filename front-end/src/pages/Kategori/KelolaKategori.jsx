import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddIcon from '@mui/icons-material/Add';
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
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

const KelolaKategori = () => {
  const [activeTab, setActiveTab] = useState('pemasukan');
  const [expandedCategories, setExpandedCategories] = useState({});
  const [editingItem, setEditingItem] = useState(null);
  const [editingText, setEditingText] = useState('');
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [addDialogType, setAddDialogType] = useState('category'); // 'category' or 'subcategory'
  
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

  // State for new category/subcategory form
  const [newCategoryName, setNewCategoryName] = useState('');
  const [selectedParentCategory, setSelectedParentCategory] = useState('');
  
  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  // Toggle category expansion
  const toggleExpand = (categoryName) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };
  
  // Start editing an item
  const startEditing = (type, categoryIndex, subItemIndex = null) => {
    const editKey = `${type}-${categoryIndex}${subItemIndex !== null ? `-${subItemIndex}` : ''}`;
    const categories = type === 'pemasukan' ? incomeCategories : expenseCategories;
    
    let textToEdit;
    if (subItemIndex !== null) {
      textToEdit = categories[categoryIndex].sublist[subItemIndex].name;
    } else {
      textToEdit = categories[categoryIndex].name;
    }
    
    setEditingItem(editKey);
    setEditingText(textToEdit);
  };
  
  // Save edited item
  const saveEdit = (type, categoryIndex, subItemIndex = null) => {
    if (editingText.trim() === '') return;
    
    if (type === 'pemasukan') {
      const newCategories = [...incomeCategories];
      if (subItemIndex !== null) {
        newCategories[categoryIndex].sublist[subItemIndex].name = editingText;
      } else {
        newCategories[categoryIndex].name = editingText;
      }
      setIncomeCategories(newCategories);
    } else {
      const newCategories = [...expenseCategories];
      if (subItemIndex !== null) {
        newCategories[categoryIndex].sublist[subItemIndex].name = editingText;
      } else {
        newCategories[categoryIndex].name = editingText;
      }
      setExpenseCategories(newCategories);
    }
    
    setEditingItem(null);
    setEditingText('');
  };
  
  // Delete an item
  const deleteItem = (type, categoryIndex, subItemIndex = null) => {
    if (type === 'pemasukan') {
      if (subItemIndex !== null) {
        // Delete subitem
        const newCategories = [...incomeCategories];
        newCategories[categoryIndex].sublist = newCategories[categoryIndex].sublist.filter((_, i) => i !== subItemIndex);
        setIncomeCategories(newCategories);
      } else {
        // Delete category
        setIncomeCategories(incomeCategories.filter((_, i) => i !== categoryIndex));
      }
    } else {
      if (subItemIndex !== null) {
        // Delete subitem
        const newCategories = [...expenseCategories];
        newCategories[categoryIndex].sublist = newCategories[categoryIndex].sublist.filter((_, i) => i !== subItemIndex);
        setExpenseCategories(newCategories);
      } else {
        // Delete category
        setExpenseCategories(expenseCategories.filter((_, i) => i !== categoryIndex));
      }
    }
  };
  
  // Add new subitem
  const addSubItem = (type, categoryIndex) => {
    if (type === 'pemasukan') {
      const newCategories = [...incomeCategories];
      newCategories[categoryIndex].sublist.push({ name: 'Baru' });
      setIncomeCategories(newCategories);
      // Expand the category and start editing the new item
      setExpandedCategories(prev => ({
        ...prev,
        [newCategories[categoryIndex].name]: true
      }));
      setTimeout(() => {
        startEditing(type, categoryIndex, newCategories[categoryIndex].sublist.length - 1);
      }, 100);
    } else {
      const newCategories = [...expenseCategories];
      newCategories[categoryIndex].sublist.push({ name: 'Baru' });
      setExpenseCategories(newCategories);
      // Expand the category and start editing the new item
      setExpandedCategories(prev => ({
        ...prev,
        [newCategories[categoryIndex].name]: true
      }));
      setTimeout(() => {
        startEditing(type, categoryIndex, newCategories[categoryIndex].sublist.length - 1);
      }, 100);
    }
  };

  // Open add dialog
  const openAddDialog = (type) => {
    setAddDialogType(type);
    setShowAddDialog(true);
    setNewCategoryName('');
    setSelectedParentCategory('');
  };

  // Close add dialog
  const closeAddDialog = () => {
    setShowAddDialog(false);
  };

  // Save new category
  const saveNewCategory = () => {
    if (newCategoryName.trim() === '') return;

    const defaultIcon = activeTab === 'pemasukan' ? AddIcon : MoreHorizIcon;
    
    if (addDialogType === 'category') {
      if (activeTab === 'pemasukan') {
        setIncomeCategories([
          ...incomeCategories,
          { name: newCategoryName, icon: defaultIcon, sublist: [] }
        ]);
      } else {
        setExpenseCategories([
          ...expenseCategories,
          { name: newCategoryName, icon: defaultIcon, sublist: [] }
        ]);
      }
    } else if (addDialogType === 'subcategory') {
      if (selectedParentCategory === '') return;
      
      if (activeTab === 'pemasukan') {
        const newCategories = [...incomeCategories];
        const categoryIndex = newCategories.findIndex(cat => cat.name === selectedParentCategory);
        if (categoryIndex !== -1) {
          newCategories[categoryIndex].sublist.push({ name: newCategoryName });
          setIncomeCategories(newCategories);
          
          // Expand the category
          setExpandedCategories(prev => ({
            ...prev,
            [selectedParentCategory]: true
          }));
        }
      } else {
        const newCategories = [...expenseCategories];
        const categoryIndex = newCategories.findIndex(cat => cat.name === selectedParentCategory);
        if (categoryIndex !== -1) {
          newCategories[categoryIndex].sublist.push({ name: newCategoryName });
          setExpenseCategories(newCategories);
          
          // Expand the category
          setExpandedCategories(prev => ({
            ...prev,
            [selectedParentCategory]: true
          }));
        }
      }
    }
    
    closeAddDialog();
  };
  
  // Render categories
  const renderCategories = (categories, type) => {
    return categories.map((category, index) => (
      <div key={index} className="border rounded mb-2">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center">
            <div className="mr-3 text-gray-500">
              <category.icon sx={{ fontSize: 20 }} />
            </div>
            {editingItem === `${type}-${index}` ? (
              <input
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                className="border rounded px-2 py-1 w-full"
                autoFocus
              />
            ) : (
              <span>{category.name}</span>
            )}
          </div>
          <div className="flex items-center">
            {editingItem === `${type}-${index}` ? (
              <>
                <button onClick={() => saveEdit(type, index)} className="text-green-500 mr-2">
                  <CheckIcon sx={{ fontSize: 18 }} />
                </button>
                <button onClick={() => setEditingItem(null)} className="text-red-500 mr-2">
                  <CloseIcon sx={{ fontSize: 18 }} />
                </button>
              </>
            ) : (
              <>
                <button onClick={() => startEditing(type, index)} className="text-blue-500 mr-2">
                  <EditIcon sx={{ fontSize: 18 }} />
                </button>
                <button onClick={() => deleteItem(type, index)} className="text-red-500 mr-2">
                  <DeleteIcon sx={{ fontSize: 18 }} />
                </button>
                <button onClick={() => addSubItem(type, index)} className="text-green-500 mr-2">
                  <AddIcon sx={{ fontSize: 18 }} />
                </button>
                <button onClick={() => toggleExpand(category.name)} className="text-gray-400">
                  {expandedCategories[category.name] ? (
                    <ExpandLessIcon sx={{ fontSize: 18 }} />
                  ) : (
                    <ExpandMoreIcon sx={{ fontSize: 18 }} />
                  )}
                </button>
              </>
            )}
          </div>
        </div>
        
        {/* Sublist */}
        {expandedCategories[category.name] && (
          <div className="pl-10 pr-3 pb-3">
            {category.sublist.map((subItem, subIndex) => (
              <div key={subIndex} className="border-t flex items-center justify-between py-2">
                <div className="flex items-center">
                  <ArrowRightIcon sx={{ fontSize: 18 }} className="text-gray-400 mr-2" />
                  {editingItem === `${type}-${index}-${subIndex}` ? (
                    <input
                      type="text"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                      className="border rounded px-2 py-1 w-full"
                      autoFocus
                    />
                  ) : (
                    <span>{subItem.name}</span>
                  )}
                </div>
                <div className="flex items-center">
                  {editingItem === `${type}-${index}-${subIndex}` ? (
                    <>
                      <button onClick={() => saveEdit(type, index, subIndex)} className="text-green-500 mr-2">
                        <CheckIcon sx={{ fontSize: 18 }} />
                      </button>
                      <button onClick={() => setEditingItem(null)} className="text-red-500">
                        <CloseIcon sx={{ fontSize: 18 }} />
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => startEditing(type, index, subIndex)} className="text-blue-500 mr-2">
                        <EditIcon sx={{ fontSize: 18 }} />
                      </button>
                      <button onClick={() => deleteItem(type, index, subIndex)} className="text-red-500">
                        <DeleteIcon sx={{ fontSize: 18 }} />
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    ));
  };

  // Render dropdown menu for add button
  const renderAddMenu = () => {
    if (!showAddDialog) return null;
    
    return (
      <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-10">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
          <div className="p-4 border-b">
            <h2 className="text-lg font-medium">
              {addDialogType === 'category' 
                ? `Tambah Kategori Utama Baru (${activeTab === 'pemasukan' ? 'Pemasukan' : 'Pengeluaran'})`
                : `Tambah Subkategori Baru (${activeTab === 'pemasukan' ? 'Pemasukan' : 'Pengeluaran'})`}
            </h2>
          </div>
          
          <div className="p-4">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Nama</label>
              <input
                type="text"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                className="border rounded w-full px-3 py-2"
                placeholder="Masukkan nama kategori"
              />
            </div>
            
            {addDialogType === 'subcategory' && (
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Kategori Utama</label>
                <select
                  value={selectedParentCategory}
                  onChange={(e) => setSelectedParentCategory(e.target.value)}
                  className="border rounded w-full px-3 py-2"
                >
                  <option value="">Pilih Kategori</option>
                  {(activeTab === 'pemasukan' ? incomeCategories : expenseCategories).map((cat, index) => (
                    <option key={index} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
          
          <div className="p-4 bg-gray-50 flex justify-end space-x-2">
            <button
              onClick={closeAddDialog}
              className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100"
            >
              Batal
            </button>
            <button
              onClick={saveNewCategory}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Render dropdown menu for fixed add button
  const renderAddButtonMenu = () => {
    return (
      <div className="fixed bottom-20 right-6 bg-white rounded-lg shadow-lg">
        <div className="p-2">
          <button
            onClick={() => openAddDialog('category')}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
          >
            Tambah Kategori
          </button>
        </div>
      </div>
    );
  };
  
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow">
        {/* Tab Navigation */}
        <div className="flex border-b">
          <button
            className={`flex-1 py-3 px-4 text-center font-medium ${
              activeTab === 'pemasukan' ? 'bg-gray-100' : 'bg-white'
            }`}
            onClick={() => handleTabChange('pemasukan')}
          >
            Pemasukan
          </button>
          <button
            className={`flex-1 py-3 px-4 text-center font-medium ${
              activeTab === 'pengeluaran' ? 'bg-gray-100' : 'bg-white'
            }`}
            onClick={() => handleTabChange('pengeluaran')}
          >
            Pengeluaran
          </button>
        </div>
        
        {/* Category List */}
        <div className="p-4">
          {activeTab === 'pemasukan' && renderCategories(incomeCategories, 'pemasukan')}
          {activeTab === 'pengeluaran' && renderCategories(expenseCategories, 'pengeluaran')}
        </div>
      </div>
      
      {/* Add Button */}
      <div className="fixed bottom-6 right-6">
        <button 
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
          onClick={() => setShowAddDialog(prev => !prev)}
        >
          <AddCircleIcon sx={{ fontSize: 24 }} />
        </button>
        {showAddDialog && renderAddButtonMenu()}
      </div>
      
      {/* Add Dialog */}
      {renderAddMenu()}
    </div>
  );
};

export default KelolaKategori;