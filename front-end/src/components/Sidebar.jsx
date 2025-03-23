import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Dashboard,
  Category,
  Receipt,
  BarChart,
  CalendarToday,
  FileDownload,
  Settings,
  Logout,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log("User logged out");
    handleMenuClose();
    // Tambahkan logika logout, seperti menghapus token di localStorage
  };

  return (
    <Drawer variant="permanent" className="w-60 fixed">
      <div className="flex flex-col h-full bg-gray-800 text-white">
        <div className="p-4 text-2xl font-bold border-b border-gray-700">
          DompetIQ
        </div>
        <List className="flex-1">
          <p className="p-4 text-sm font-semibold text-gray-400">MENGELOLA</p>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/dashboard"
              className={location.pathname === "/dashboard" ? "bg-green-500" : ""}
            >
              <ListItemIcon>
                <Dashboard className="text-white" />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/rekening"
              className={location.pathname === "/rekening" ? "bg-green-500" : ""}
            >
              <ListItemIcon>
                <Category className="text-white" />
              </ListItemIcon>
              <ListItemText primary="Rekening" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/transaksi"
              className={location.pathname === "/transaksi" ? "bg-green-500" : ""}
            >
              <ListItemIcon>
                <Receipt className="text-white" />
              </ListItemIcon>
              <ListItemText primary="Transaksi" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/transaksi-terjadwal"
              className={
                location.pathname === "/transaksi-terjadwal" ? "bg-green-500" : ""
              }
            >
              <ListItemIcon>
                <Receipt className="text-white" />
              </ListItemIcon>
              <ListItemText primary="Transaksi Terjadwal" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/anggaran"
              className={location.pathname === "/anggaran" ? "bg-green-500" : ""}
            >
              <ListItemIcon>
                <BarChart className="text-white" />
              </ListItemIcon>
              <ListItemText primary="Anggaran" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/kalender"
              className={location.pathname === "/kalender" ? "bg-green-500" : ""}
            >
              <ListItemIcon>
                <CalendarToday className="text-white" />
              </ListItemIcon>
              <ListItemText primary="Kalender" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider className="bg-gray-700" />
        <List>
          <p className="p-4 text-sm font-semibold text-gray-400">PREFERENSI</p>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/export-pdf"
              className={location.pathname === "/export-pdf" ? "bg-green-500" : ""}
            >
              <ListItemIcon>
                <FileDownload className="text-white" />
              </ListItemIcon>
              <ListItemText primary="Export PDF File" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/pengelolaan-kategori"
              className={
                location.pathname === "/pengelolaan-kategori" ? "bg-green-500" : ""
              }
            >
              <ListItemIcon>
                <Settings className="text-white" />
              </ListItemIcon>
              <ListItemText primary="Pengelolaan Kategori" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/pengaturan"
              className={location.pathname === "/pengaturan" ? "bg-green-500" : ""}
            >
              <ListItemIcon>
                <Settings className="text-white" />
              </ListItemIcon>
              <ListItemText primary="Pengaturan" />
            </ListItemButton>
          </ListItem>
        </List>
        {/* Bagian Avatar dengan Dropdown */}
        <div className="p-4 flex items-center border-t border-gray-700 relative">
          <div onClick={handleMenuOpen} className="cursor-pointer flex items-center">
            <Avatar alt="User" src="/path/to/user/image.jpg" />
            <div className="ml-4">
              <p className="text-sm font-medium">Suparno</p>
              <p className="text-xs text-gray-400">suparno@example.com</p>
            </div>
          </div>
          {/* Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            className="mt-2"
            PaperProps={{
              style: {
                backgroundColor: "#1f2937", // Tailwind bg-gray-800
                color: "white",
              },
            }}
          >
            <MenuItem onClick={handleLogout}>
              <Logout className="mr-2 text-white" />
              Logout
            </MenuItem>
          </Menu>
        </div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
