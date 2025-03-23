import { Container, Grid, Box, Typography, IconButton } from "@mui/material";
import { Facebook, Instagram, Phone } from "@mui/icons-material";
import footerlogo from "../assets/footer-logo.png";
import footerIDXOJK from "../assets/footer-IDKOJK.png"; // Gambar gabungan OJK dan IDX

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#40AC0B",
        color: "white",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Logo Utama */}
          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <img src={footerlogo} alt="DompetIQ Logo" style={{ height: 60, marginBottom: 16 }} />
            </Box>
          </Grid>

          {/* Navigasi */}
          <Grid item xs={6} md={4}>
            <Box textAlign="center">
              <Typography>
                <a href="#Home" style={{ color: "white", textDecoration: "none" }}>Home</a>
              </Typography>
              <Typography>
                <a href="#Tentang" style={{ color: "white", textDecoration: "none" }}>Tentang</a>
              </Typography>
              <Typography>
                <a href="#Fitur" style={{ color: "white", textDecoration: "none" }}>Fitur</a>
              </Typography>
              <Typography>
                <a href="#Tangkapan-Layar" style={{ color: "white", textDecoration: "none" }}>Tangkapan Layar</a>
              </Typography>
            </Box>
          </Grid>

          {/* Informasi & Kebijakan */}
          <Grid item xs={6} md={4}>
            <Box textAlign="center">
              <Typography>
                <a href="#HubungiKami" style={{ color: "white", textDecoration: "none" }}>Hubungi Kami</a>
              </Typography>
              <Typography>
                <a href="#Komunitas" style={{ color: "white", textDecoration: "none" }}>Komunitas</a>
              </Typography>
              <Typography>
                <a href="#KebijakanPrivasi" style={{ color: "white", textDecoration: "none" }}>Kebijakan Privasi</a>
              </Typography>
              <Typography>
                <a href="#Terms" style={{ color: "white", textDecoration: "none" }}>Terms of Service</a>
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Logo Gabungan OJK & IDX dan Sosial Media */}
        <Box mt={6} display="flex" justifyContent="space-between" alignItems="center">
          {/* Ikon Sosial Media */}
          <Box display="flex" gap={2}>
            <IconButton color="inherit">
              <Instagram />
            </IconButton>
            <IconButton color="inherit">
              <Facebook />
            </IconButton>
            <IconButton color="inherit">
              <Phone />
            </IconButton>
          </Box>

          {/* Gambar Gabungan OJK & IDX */}
          <Box>
            <img src={footerIDXOJK} alt="OJK dan IDX Logo" style={{ height: 70 }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;