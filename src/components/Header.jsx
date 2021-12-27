import "../css/Header.css";
import React from "react";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Tooltip } from "@material-ui/core";

export default function Header() {
  const pages = [
    "Home",
    "Destination",
    "Package",
    "Spacial Offers",
    "Blog",
    "Subscription",
  ];
  return (
    <div className="headerContainer">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="titleHead" style={{ display: "flex" }}>
            <Typography variant="h6" color="white">
              <b>Tour</b>
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                color: "#00d8ff",
              }}
            >
              Nest
            </Typography>
          </div>

          {pages.map((page, index) => (
            <Tooltip placement="bottom" sx={{ backgroundColor: "#00d8ff" }}>
              <Button
                className="Btn-hover"
                key={page}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontsize: "20px",
                }}
              >
                {page}
              </Button>
            </Tooltip>
          ))}
          <Button
            size="large"
            variant="contained"
            sx={{ backgroundColor: "#00d8ff" }}
          >
            Book Now
          </Button>
        </Toolbar>
      </Container>
    </div>
  );
}
