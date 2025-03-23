import React from "react";
import {
  Box,
  Typography,
  Stack,
  IconButton,
  Grid,
  Paper,
  Fab,
  Pagination,
  PaginationItem,
} from "@mui/material";
import { Add as AddIcon, Search as SearchIcon, Error as ErrorIcon, MoreHoriz as MoreHorizIcon } from "@mui/icons-material";

const TransaksiTerjadwal = () => {
  return (
    <Box>
      {/* Header */}
      <Box
        sx={{
          height: 114,
          px: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", fontSize: 32 }}>
          Transaksi Terjadwal
        </Typography>

        <Stack direction="row" spacing={2}>
          <IconButton sx={{ bgcolor: "#f6f6f6" }}>
            <SearchIcon />
          </IconButton>
          <IconButton sx={{ bgcolor: "#f6f6f6" }}>
            <ErrorIcon />
          </IconButton>
          <IconButton sx={{ bgcolor: "#f6f6f6" }}>
            <MoreHorizIcon />
          </IconButton>
        </Stack>
      </Box>

      {/* Main Content */}
      <Box sx={{ bgcolor: "#f6f6f6", p: 4 }}>
        <Grid container spacing={2}>
          {/* Left Content */}
          <Grid item xs={9}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Daftar Transaksi Terjadwal
              </Typography>

              {/* Placeholder for Transaction List */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ color: "#292929b2", fontSize: 14 }}>
                  Data transaksi terjadwal akan ditampilkan di sini.
                </Typography>
              </Box>

              {/* Pagination */}
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 500, fontSize: 12 }}
                  >
                    1-2 item
                  </Typography>
                  <Pagination
                    count={2}
                    page={1}
                    renderItem={(item) => (
                      <PaginationItem
                        {...item}
                        sx={{
                          bgcolor: item.page === 1 ? "#51c41b" : "transparent",
                          color: item.page === 1 ? "white" : "#505470",
                          border: item.page !== 1 ? "1px solid #eff0f4" : "none",
                          borderRadius: "3px",
                          width: 26,
                          height: 27,
                        }}
                      />
                    )}
                  />
                </Stack>
              </Box>
            </Paper>
          </Grid>

          {/* Right Content */}
          <Grid item xs={3}>
            {/* Placeholder for Additional Info */}
            <Paper sx={{ p: 3, mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Informasi Tambahan
              </Typography>
              <Typography variant="body2" sx={{ color: "#292929b2", fontSize: 14 }}>
                Detail terkait transaksi terjadwal akan ditampilkan di sini.
              </Typography>
            </Paper>

            {/* Action Buttons */}
            <Fab
              color="primary"
              aria-label="add"
              sx={{
                position: "absolute",
                right: 30,
                bottom: 120,
                bgcolor: "#51c41b",
                width: 51,
                height: 48,
                borderRadius: "25.5px/24px",
              }}
            >
              <AddIcon />
            </Fab>

            <Fab
              color="secondary"
              aria-label="add"
              sx={{
                position: "absolute",
                right: 30,
                bottom: 50,
                bgcolor: "#ff3a3a",
                width: 51,
                height: 48,
                borderRadius: "25.5px/24px",
              }}
            >
              <AddIcon />
            </Fab>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TransaksiTerjadwal;
