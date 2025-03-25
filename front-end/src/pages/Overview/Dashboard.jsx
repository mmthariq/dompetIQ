import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';
import { MoreVert, AttachMoney, Work, AccountBalanceWallet } from '@mui/icons-material';

const Dashboard = () => {
  // Data for monthly chart
  const monthlyData = [
    { name: 'Jan', value: 30 },
    { name: 'Feb', value: 25 },
    { name: 'Mar', value: 35 },
    { name: 'Apr', value: 40 },
    { name: 'Mei', value: 50 },
    { name: 'Jun', value: 100 },
    { name: 'Jul', value: 40 },
    { name: 'Agu', value: 30 },
    { name: 'Sep', value: 25 },
    { name: 'Okt', value: 35 },
    { name: 'Nov', value: 45 },
    { name: 'Des', value: 30 },
  ];

  // Transaction history data
  const transactions = [
    {
      id: 1,
      name: 'Winardi',
      description: 'BPJS Kesehatan',
      subdescription: 'Tagihan Ismi',
      date: '12/03/2025',
      amount: 'Rp 3.600.000',
    },
    {
      id: 2,
      name: 'Jumiati',
      description: 'Pembayaran Online',
      subdescription: 'Tokopedia',
      date: '12/03/2025',
      amount: 'Rp 1.200.000',
    },
  ];

  // Budget data
  const budgets = [
    {
      id: 1,
      title: 'Makan di Luar',
      dateRange: '10/03/2025 - 16/03/2025',
      spent: 'Rp 120.000',
      total: 'Rp 300.000',
      percentage: 40,
    },
    {
      id: 2,
      title: 'Tagihan Listrik',
      dateRange: '01/03/2025 - 31/03/2025',
      spent: 'Rp 150.000',
      total: 'Rp 500.000',
      percentage: 30,
    },
  ];

  return (
    <div className="bg-gray-100 p-4 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Total Balance Card */}
        <div className="bg-black text-white rounded-lg p-4 relative">
          <div className="absolute top-3 right-3">
            <MoreVert fontSize="small" />
          </div>
          <div className="flex items-center mb-2">
            <div className="bg-green-500 p-2 rounded-full mr-2">
              <AccountBalanceWallet fontSize="small" style={{ color: 'white' }} />
            </div>
          </div>
          <div className="text-sm opacity-70 mb-1">Jumlah Saldo</div>
          <div className="text-xl font-bold">Rp 106.330.022</div>
        </div>
        
        {/* Total Expenses Card */}
        <div className="bg-white rounded-lg p-4 relative">
          <div className="absolute top-3 right-3">
            <MoreVert fontSize="small" />
          </div>
          <div className="flex items-center mb-2">
            <div className="bg-gray-200 p-2 rounded-full mr-2">
              <Work fontSize="small" style={{ color: 'black' }} />
            </div>
          </div>
          <div className="text-sm text-gray-500 mb-1">Jumlah pengeluaran</div>
          <div className="text-xl font-bold">Rp 16.260.000</div>
        </div>
        
        {/* Saved Money Card */}
        <div className="bg-white rounded-lg p-4 relative">
          <div className="absolute top-3 right-3">
            <MoreVert fontSize="small" />
          </div>
          <div className="flex items-center mb-2">
            <div className="bg-gray-200 p-2 rounded-full mr-2">
              <AttachMoney fontSize="small" style={{ color: 'black' }} />
            </div>
          </div>
          <div className="text-sm text-gray-500 mb-1">Uang disimpan</div>
          <div className="text-xl font-bold">Rp 30.630.120</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-1">
          {/* Summary Chart */}
          <div className="bg-white rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold">Ringkasan</h2>
              <MoreVert fontSize="small" />
            </div>
            <div className="relative h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <Bar dataKey="value" fill="#00E676" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Transaction History */}
          <div className="bg-white rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold">Riwayat Transaksi</h2>
              <MoreVert fontSize="small" />
            </div>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mr-3 overflow-hidden">
                      {/* Placeholder for avatar */}
                    </div>
                    <div>
                      <div className="font-medium">{transaction.name}</div>
                      <div className="text-xs text-gray-500">
                        {transaction.description}
                        <br />
                        <span className="text-gray-400">{transaction.subdescription}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div>{transaction.date}</div>
                    <div className="font-medium">{transaction.amount}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-1">
          {/* Activities Bubble Chart */}
          <div className="bg-white rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold">Aktivitas</h2>
              <MoreVert fontSize="small" />
            </div>
            <div className="relative h-48 flex items-center justify-center">
              {/* Large Green Bubble */}
              <div className="absolute bg-green-500 rounded-full w-32 h-32 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="font-bold">Rp 230.000</div>
                  <div className="text-xs">Toko Online</div>
                </div>
              </div>
              
              {/* Medium Gray Bubble */}
              <div className="absolute top-24 right-24 bg-gray-200 rounded-full w-20 h-20 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-bold text-sm">Rp 16.000</div>
                  <div className="text-xs">Ojek Online</div>
                </div>
              </div>
              
              {/* Small Dark Bubble */}
              <div className="absolute bottom-4 left-16 bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="font-bold text-xs">Rp 60.000</div>
                  <div className="text-xs">Makanan</div>
                </div>
              </div>
            </div>
          </div>

          {/* Monthly Comparison */}
          <div className="bg-white rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold">Perbandingan (Bulan)</h2>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-sm mb-1">Bulan ini</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
              <div>
                <div className="text-sm mb-1">Bulan lalu</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gray-800 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Budget */}
          <div className="bg-white rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold">Anggaran</h2>
              <MoreVert fontSize="small" />
            </div>
            <div className="space-y-4">
              {budgets.map((budget) => (
                <div key={budget.id} className="border-b pb-2 last:border-0">
                  <div className="flex justify-between items-center">
                    <div className="font-medium">{budget.title}</div>
                    <div className="text-xs text-gray-500">{budget.dateRange}</div>
                  </div>
                  <div className="flex justify-between items-center text-xs text-gray-500 mt-1">
                    <div>{budget.spent}</div>
                    <div>{budget.total}</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                    <div
                      className="bg-green-500 h-1 rounded-full"
                      style={{ width: `${budget.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;