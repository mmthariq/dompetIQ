import React from "react";
import { Card, CardContent } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SavingsIcon from "@mui/icons-material/Savings";
import SearchIcon from "@mui/icons-material/Search";
import InfoIcon from "@mui/icons-material/Info";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Sidebar from "../components/Sidebar";


const pieData = [
  { name: "Toko Online", value: 220000, color: "#A3E635" },
  { name: "Ojek Online", value: 16000, color: "#D9F99D" },
  { name: "Makanan", value: 60000, color: "#374151" },
];

const barData = [
  { month: "Jan", value: 0 },
  { month: "Feb", value: 0 },
  { month: "Mar", value: 0 },
  { month: "Apr", value: 0 },
  { month: "Mei", value: 0 },
  { month: "Jun", value: 36930031 },
  { month: "Jul", value: 0 },
  { month: "Agu", value: 0 },
  { month: "Sep", value: 0 },
  { month: "Okt", value: 0 },
  { month: "Nov", value: 0 },
  { month: "Des", value: 0 },
];

const transactions = [
  { name: "Winardi", desc: "BPJS Kesehatan", date: "12/03/2025", amount: "Rp 3.600.000" },
  { name: "Jum'ati", desc: "Pembayaran Online", date: "12/03/2025", amount: "Rp 1.200.000" },
];

const budgets = [
  { category: "Makan di Luar", date: "10/03/2025", amount: "Rp 3.600.000" },
  { category: "Tagihan Listrik", date: "15/03/2025", amount: "Rp 1.200.000" },
];

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b pb-2">
          <h2 className="text-lg font-medium text-black">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <SearchIcon className="cursor-pointer text-gray-600 hover:text-black" />
            <InfoIcon className="cursor-pointer text-gray-600 hover:text-black" />
            <MoreVertIcon className="cursor-pointer text-gray-600 hover:text-black" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-4">
          {/* Card 1 */}
          <Card className="bg-black text-white p-4 rounded-lg relative">
            {/* Ikon Titik Tiga */}
            <div className="absolute top-2 right-2">
              <MoreVertIcon className="text-gray-400 cursor-pointer hover:text-white" />
            </div>

            <CardContent className="flex flex-col justify-center items-center space-y-4 h-full">
              {/* Lingkaran Hijau di Belakang Ikon */}
              <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center">
                <AccountBalanceWalletIcon className="text-green-400 text-4xl" />
              </div>
              <div className="text-center">
                <h3 className="text-sm text-gray-400">Jumlah Saldo</h3>
                <p className="text-xl font-bold">Rp 106.330.022</p>
              </div>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="bg-gray-200 text-black p-4 rounded-lg relative">
            <div className="absolute top-2 right-2">
              <MoreVertIcon className="text-gray-400 cursor-pointer hover:text-black" />
            </div>

            <CardContent className="flex flex-col justify-center items-center space-y-4 h-full">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <ShoppingCartIcon className="text-red-400 text-4xl" />
              </div>
              <div className="text-center">
                <h3 className="text-sm text-gray-600">Jumlah Pengeluaran</h3>
                <p className="text-xl font-bold">Rp 16.260.000</p>
              </div>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="bg-gray-200 text-black p-4 rounded-lg relative">
            <div className="absolute top-2 right-2">
              <MoreVertIcon className="text-gray-400 cursor-pointer hover:text-black" />
            </div>

            <CardContent className="flex flex-col justify-center items-center space-y-4 h-full">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <SavingsIcon className="text-blue-400 text-4xl" />
              </div>
              <div className="text-center">
                <h3 className="text-sm text-gray-600">Uang Disimpan</h3>
                <p className="text-xl font-bold">Rp 30.630.120</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Ringkasan dan Aktivitas */}
        <div className="grid grid-cols-2 gap-6 mt-6">
          {/* Ringkasan */}
          <div className="bg-white p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Ringkasan</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={barData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#A3E635" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Aktivitas dan Perbandingan */}
          <div className="bg-white p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Aktivitas</h3>
            <PieChart width={300} height={200}>
              <Pie data={pieData} dataKey="value" outerRadius={80}>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>

            {/* Perbandingan (Bulan) */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Perbandingan (Bulan)</h3>
              <div className="flex flex-col space-y-3">
                <div className="flex items-center">
                  <div className="w-8 h-4 bg-green-400 rounded-full"></div>
                  <span className="ml-2">Bulan ini</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-4 bg-gray-800 rounded-full"></div>
                  <span className="ml-2">Bulan lalu</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Riwayat Transaksi dan Anggaran */}
        <div className="grid grid-cols-2 gap-6 mt-6">
          {/* Riwayat Transaksi */}
          <div className="bg-white p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Riwayat Transaksi</h3>
            <ul>
              {transactions.map((trx, index) => (
                <li key={index} className="flex justify-between border-b py-2">
                  <div>
                    <span className="font-medium">{trx.name}</span> - {trx.desc}
                    <p className="text-sm text-gray-500">{trx.date}</p>
                  </div>
                  <span>{trx.amount}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Anggaran */}
          <div className="bg-white p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Anggaran</h3>
            <ul>
              {budgets.map((budget, index) => (
                <li key={index} className="flex justify-between border-b py-2">
                  <div>
                    <span className="font-medium">{budget.category}</span>
                    <p className="text-sm text-gray-500">{budget.date}</p>
                  </div>
                  <span>{budget.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;