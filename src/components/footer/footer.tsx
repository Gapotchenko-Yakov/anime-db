import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
// import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import {
  ContactPhone,
  Email,
  Facebook,
  FacebookOutlined,
  GitHub,
  Google,
  Home,
  Instagram,
  LinkedIn,
  LocalFireDepartment,
  Phone,
  Twitter,
} from "@mui/icons-material";
import { Box, Divider, Paper, Stack } from "@mui/material";

const Footer = (props) => {
  return (
    <Stack
      direction="column"
      color="text.primary"
      sx={{ bgcolor: "background.default", mt: 3 }}
    >
      {/* Section: Social media */}
      <Box
        flex={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          mx: 8,
          my: 2,
        }}
      >
        <Box width="max-content" display="inline-block">
          <Typography>Get connected with us on social networks:</Typography>
        </Box>

        <Box width="max-content" display="inline-block">
          <Link href="" sx={{ mx: 2 }}>
            <FacebookOutlined />
          </Link>
          <Link href="" sx={{ mx: 2 }}>
            <Twitter />
          </Link>
          <Link href="" sx={{ mx: 2 }}>
            <Google />
          </Link>
          <Link href="" sx={{ mx: 2 }}>
            <Instagram />
          </Link>
          <Link href="" sx={{ mx: 2 }}>
            <LinkedIn />
          </Link>
          <Link href="" sx={{ mx: 2 }}>
            <GitHub />
          </Link>
        </Box>
      </Box>
      <Divider light />
      {/* Section: Links  */}
      <Grid container sx={{ p: 1, m: 2 }}>
        <Grid item md={3} lg={4} xl={3} mx="auto" mb={4}>
          {/* Content */}
          <Typography variant="h6">
            <LocalFireDepartment /> COMPANY NAME
          </Typography>
          <Typography>
            Here you can use rows and columns to organize your footer content.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
        </Grid>

        <Grid item md={2} lg={2} xl={2} mx="auto" mb={4}>
          {/* Links */}
          <Typography variant="h6">PRODUCTS</Typography>
          <Typography>
            <Link href="#!" className="text-reset">
              Angular
            </Link>
          </Typography>
          <Typography>
            <Link href="#!" className="text-reset">
              React
            </Link>
          </Typography>
          <Typography>
            <Link href="#!" className="text-reset">
              Vue
            </Link>
          </Typography>
          <Typography>
            <Link href="#!" className="text-reset">
              Laravel
            </Link>
          </Typography>
        </Grid>

        <Grid item md={3} lg={2} xl={2} mx="auto" mb={4}>
          {/* Links */}
          <Typography variant="h6">USEFUL LINKS</Typography>
          <Typography>
            <Link href="#!" className="text-reset">
              Pricing
            </Link>
          </Typography>
          <Typography>
            <Link href="#!" className="text-reset">
              Settings
            </Link>
          </Typography>
          <Typography>
            <Link href="#!" className="text-reset">
              Orders
            </Link>
          </Typography>
          <Typography>
            <Link href="#!" className="text-reset">
              Help
            </Link>
          </Typography>
        </Grid>

        <Grid item md={4} lg={3} xl={3} mx="auto" mb={4}>
          {/* Links */}
          <Typography variant="h6">CONTACT</Typography>
          <Typography>
            <Home sx={{ mr: 1 }} /> New York, NY 10012, US
          </Typography>
          <Typography>
            <Email sx={{ mr: 1 }} />
            info@example.com
          </Typography>
          <Typography>
            <Phone sx={{ mr: 1 }} /> + 01 234 567 88
          </Typography>
          <Typography>
            <ContactPhone sx={{ mr: 1 }} /> + 01 234 567 89
          </Typography>
        </Grid>
      </Grid>

      <Divider />
      {/* Copyright */}
      <Box flex={2} sx={{ textAlign: "center", py: 2 }}>
        <Typography>
          © 2023 Copyright:
          <Link href="https://ani-db.com/">ani-db.com</Link>
        </Typography>
      </Box>
    </Stack>
  );
};

export default Footer;
