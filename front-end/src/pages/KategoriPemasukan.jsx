import { useState } from "react";
import {
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  MenuItem,
  Select,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import Sidebar from "../components/Sidebar";

const KategoriPemasukan = () => {
  const [tab, setTab] = useState("pemasukan");
  const [openCategory, setOpenCategory] = useState(false);
  const [openSubCategory, setOpenSubCategory] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  
  const pemasukan = ["Pendapatan Keuangan", "Pemasukan", "Lain (Pemasukan)"];
  const pengeluaran = ["Tagihan", "Belanja", "Transportasi", "Hiburan"];

  const handleOpenCategory = () => setOpenCategory(true);
  const handleCloseCategory = () => {
    setOpenCategory(false);
    setCategoryName("");
  };

  const handleSaveCategory = () => {
    console.log("Kategori ditambahkan:", categoryName);
    handleCloseCategory();
    setOpenSubCategory(true);
  };

  const handleCloseSubCategory = () => {
    setOpenSubCategory(false);
    setSubCategory("");
    setSelectedCategory("");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-4">Pengelolaan Kategori</h2>
        <div className="flex mb-4">
          <button
            onClick={() => setTab("pemasukan")}
            className={`px-4 py-2 ${tab === "pemasukan" ? "font-semibold" : "text-gray-500"}`}
          >
            Pemasukan
          </button>
          <button
            onClick={() => setTab("pengeluaran")}
            className={`px-4 py-2 ${tab === "pengeluaran" ? "font-semibold" : "text-gray-500"}`}
          >
            Pengeluaran
          </button>
        </div>

        <Card className="bg-white p-4 shadow-md rounded-lg">
          <CardContent>
            {(tab === "pemasukan" ? pemasukan : pengeluaran).map(
              (item, index) => (
                <Accordion key={index}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    {item}
                  </AccordionSummary>
                  <AccordionDetails>Detail kategori {item}</AccordionDetails>
                </Accordion>
              )
            )}
          </CardContent>
        </Card>

        <IconButton
          color={tab === "pemasukan" ? "success" : "error"}
          className={`!fixed bottom-6 right-6 ${
            tab === "pemasukan" ? "bg-green-500" : "bg-red-500"
          } text-white rounded-full p-4 shadow-lg`}
          onClick={handleOpenCategory}
        >
          <AddIcon fontSize="large" />
        </IconButton>

        <Dialog open={openCategory} onClose={handleCloseCategory}>
          <DialogTitle className="font-bold">Kategori Baru</DialogTitle>
          <DialogContent>
            <TextField
              label="Nama"
              fullWidth
              variant="outlined"
              className="mt-2"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseCategory} color="success">Batal</Button>
            <Button variant="contained" color="success" onClick={handleSaveCategory}>
              Simpan
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog open={openSubCategory} onClose={handleCloseSubCategory}>
          <DialogTitle className="font-bold">Subkategori Baru</DialogTitle>
          <DialogContent>
            <TextField
              label="Nama"
              fullWidth
              variant="outlined"
              className="mt-2"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
            />
            <Select
              fullWidth
              className="mt-4"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              displayEmpty
            >
              <MenuItem value="" disabled>Pilih Kategori</MenuItem>
              {(tab === "pemasukan" ? pemasukan : pengeluaran).map((item, index) => (
                <MenuItem key={index} value={item}>{item}</MenuItem>
              ))}
            </Select>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseSubCategory} color="success">Batal</Button>
            <Button variant="contained" color="success" onClick={handleCloseSubCategory}>
              Simpan
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default KategoriPemasukan;
