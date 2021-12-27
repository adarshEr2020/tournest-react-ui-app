import { Button, Typography, Box, rgbToHex } from "@mui/material";
import React from "react";
import "../css/dateAndTimeContain.css";

export default function DateAndTime() {
  return (
    <Box
      className="dateAndTimeContaner"
      sx={{
        height: "600px",
        display: "flex",
      }}
    >
      <Box
        textAlign="center"
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
          background: "rgba(0, 122, 207, 0.4)",
          width: "100%",
        }}
      >
        <Typography variant="h4" color="#ffffff">
          Join With Us Within 21 January, 2018 And Get Upto 40% Discount
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: "200px",
              width: "700px",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              background: rgbToHex("rgba(50,55,63,.65)"),
            }}
          >
            <Box>
              <Typography variant="h3" color="white">
                -1390 : 08 : 53 :00
              </Typography>
              <Typography variant="h6" color="white">
                Days Hour Minute Second
              </Typography>
            </Box>
          </Box>
        </Box>

        <Button variant="contained" sx={{ backgroundColor: "#00d8ff" }}>
          Join NOW
        </Button>
      </Box>
    </Box>
  );
}
