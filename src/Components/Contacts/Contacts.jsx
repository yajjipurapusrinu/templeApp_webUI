import React from "react";
import { Box, Typography } from "@mui/material";
import templeImage from "../../Images/donetShiva.png"; // Adjust path as needed
import RegisterFrom from "../../Components/Contacts/ContactComp";

import Footer from "../Footer/Footer";

const RegisterBanner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black", // 💥 Set entire page background
        minHeight: "100vh", // 💥 Make sure it covers full viewport height
        color: "white", // Default text color
        px: 2, // Optional padding
        py: 4,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: 300, sm: 400, md: 500 },
          borderRadius: 4,
          overflow: "hidden",
          mb: 5,
        }}
      >
        {/* Background Image */}
        <Box
          component="img"
          src={templeImage}
          alt="Temple"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            px: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "semibold",
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            }}
          >
            Contact Us
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: "800px", mt: 2 }}>
            Witness the grandeur of Koti Lingas symbolizing eternity and
            infinite power.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mb: 10 }}>
        <RegisterFrom />
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "450px",
          border: 0,
          overflow: "hidden",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7600.420944663123!2d83.25804059199784!3d17.73471938285126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3942b111a3a579%3A0x29abfc89d3565027!2sNirmaan%20Park%2C%20Kancharapalem%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1744284826931!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Nirmaan Park Map"
        />
      </Box>
      <Box>
        <Footer />
      </Box>
      {/* You can place the registration form here if needed */}
    </Box>
  );
};

export default RegisterBanner;
