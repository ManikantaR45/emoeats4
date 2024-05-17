import React from "react";
import { Typography, Box, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GroupImage from "../Group 1000000907.svg";

const OrderConfirmedComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        overflowY: "auto",
      }}
    >
      <Box sx={{ mt: 8 }}>
        <img src={GroupImage} alt="Group 1000000907" />
      </Box>
      <Typography variant="h4" align="center" gutterBottom sx={{ mt: 1 }}>
        Your order is confirmed!
      </Typography>
      <Typography
        variant="body1"
        align="center"
        gutterBottom
        sx={{ textAlign: "center", color: "grey", mb: 2 }}
      >
        Please hang on with your beloved ones while we deliver at table no. 1
      </Typography>

      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          width: "80%",

          zIndex: 9999,
          borderTop: "2px solid #ACAAAA",
          py: 2,
          px: 3,
        }}
      >
        <Typography variant="body1" align="center" sx={{ mt: 1 }}>
          Follow Us:
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button
            variant="outlined"
            color="primary"
            href="https://www.facebook.com/share/rD1S5xFWhywayFU8/?mibextid=qi2Omg"
          >
            <FacebookIcon />
          </Button>
          <Button
            variant="outlined"
            color="primary"
            href="https://www.linkedin.com/company/attentionkart/"
          >
            <LinkedInIcon />
          </Button>
          <Button
            variant="outlined"
            color="primary"
            href="https://www.instagram.com/attentionkart?igsh=MTZ0YXh5OW8weTBzcQ=="
          >
            <InstagramIcon />
          </Button>
        </Box>
        <Typography variant="body1" align="center" sx={{ mt: 2 }}>
          Powered by <span style={{ color: "green" }}>Attentionkart</span>
        </Typography>
      </Box>
    </div>
  );
};

export default OrderConfirmedComponent;
