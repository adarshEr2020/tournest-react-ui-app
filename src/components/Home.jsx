import React from "react";
import Header from "./Header";
import "../css/Home.css";
import { Typography, Button, Grid } from "@mui/material";
import ToorPackages from "./ToorPackages";
import TopDestination from "./TopDestination";
import { Box } from "@mui/system";
import FullWidthTabs from "./FullWidthTabs";
import DateAndTime from "./DateAndTime";
export default function Home() {
  return (
    <>
      <div className="container">
        <div style={{ background: "rgba(0,122,207,.4)" }}>
          <Header />
          <div className="about">
            <div className="about-txt">
              <Typography
                variant="h1"
                className="abuttext"
                noWrap
                component="div"
                sx={{
                  color: "#ffffff",
                  fontWeight: "bold",
                }}
              >
                Explore the Beauty
                <br /> of the Beautiful
                <br /> World
              </Typography>
              <div className="explore-btn">
                <Button
                  size="large"
                  variant="contained"
                  sx={{ backgroundColor: "#00d8ff" }}
                >
                  Explore Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tabSection-home">
        <FullWidthTabs />
      </div>
      <Grid
        display="flex"
        justifyContent="space-between"
        pl="10%"
        pt="10%"
        pr="10%"
        textAlign="center"
        backgroundColor="#ffffff"
      >
        <img
          src="https://demos.onepagelove.com/html/tournest/assets/images/service/s1.png"
          alt="tournest.jpg"
          height="100px"
        />
        <Box
          sx={{
            width: 250,
            height: 200,
            backgroundColor: "primary.dark",
          }}
        >
          <Typography variant="h6" mb="5%">
            Amazing Tour Packages
          </Typography>
          <Typography color="gray" paragraph>
            Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla.
          </Typography>
        </Box>
        <img
          src="	https://demos.onepagelove.com/html/tournest/assets/images/service/s2.png"
          alt=""
          height="100px"
        />
        <Box
          sx={{
            width: 250,
            height: 200,
            backgroundColor: "primary.dark",
          }}
        >
          <Typography variant="h6" mb="5%">
            Book Top Class Hotel
          </Typography>
          <Typography color="gray" paragraph>
            Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla.
          </Typography>
        </Box>
        <img
          src="	https://demos.onepagelove.com/html/tournest/assets/images/service/s3.png"
          alt=""
          height="100px"
        />
        <Box
          sx={{
            width: 250,
            height: 200,
            backgroundColor: "primary.dark",
          }}
        >
          <Typography variant="h6" mb="5%">
            Online Flight Booking
          </Typography>
          <Typography color="gray" paragraph>
            Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla.
          </Typography>
        </Box>
      </Grid>
      <TopDestination />
      <DateAndTime />
      <ToorPackages />
    </>
  );
}
