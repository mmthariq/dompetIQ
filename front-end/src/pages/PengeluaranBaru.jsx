import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus } from "lucide-react";

const ExpenseForm = () => {
  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Tambah Pengeluaran</h2>
      
      <label className="block mb-2">Kategori</label>
      <Select>
        <SelectItem value="makanan">Makanan</SelectItem>
        <SelectItem value="transportasi">Transportasi</SelectItem>
        <SelectItem value="hiburan">Hiburan</SelectItem>
      </Select>

      <label className="block mt-4 mb-2">Jumlah (Rp)</label>
      <Input type="number" placeholder="Masukkan jumlah" />

      <label className="block mt-4 mb-2">Rekening</label>
      <Select>
        <SelectItem value="dompet">Dompet</SelectItem>
        <SelectItem value="bank">Bank</SelectItem>
        <SelectItem value="ewallet">E-Wallet</SelectItem>
      </Select>

      <div className="flex items-center gap-2 mt-4">
        <Checkbox id="important" />
        <label htmlFor="important" className="text-sm">Tandai sebagai penting</label>
      </div>

      <label className="block mt-4 mb-2">Tanggal & Waktu</label>
      <Input type="datetime-local" />

      <label className="block mt-4 mb-2">Kepada</label>
      <Select>
        <SelectItem value="teman">Teman</SelectItem>
        <SelectItem value="keluarga">Keluarga</SelectItem>
        <SelectItem value="lainnya">Lainnya</SelectItem>
      </Select>

      <label className="block mt-4 mb-2">Catatan</label>
      <Textarea placeholder="Tambahkan catatan..." />
      
      <Button className="mt-4 w-full flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white">
        <Plus size={18} /> Tambah Pengeluaran
      </Button>
    </div>
  );
};

export default ExpenseForm;
