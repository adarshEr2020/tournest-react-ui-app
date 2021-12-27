import React from "react";
import { Container, Grid, Typography } from "@mui/material";
export default function TopDestination() {
  return (
    <>
      <Container className="package-contain-txt" sx={{ textAlign: "center " }}>
        <Typography variant="h4" component="h2" color="gray">
          Top Destination
        </Typography>
        <br />
        <Typography>
          Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla.
        </Typography>
      </Container>
      <Container
        style={{
          width: "100%",
          display: "grid",
          justifyContent: "space-between",
          gridTemplateColumns: "200px 500px",
          gridGap: "1%",
          marginBottom: "5%",
        }}
      >
        {imgLists.map((imgList, index) => (
          <Grid
            container
            direction="row"
            sx={{
              flexGrow: 3,
            }}
            key={index}
          >
            <img src={imgList.img} alt="images.jpg"/>
          </Grid>
        ))}
      </Container>
    </>
  );
}

const imgLists = [
  {
    img: "https://demos.onepagelove.com/html/tournest/assets/images/gallary/g1.jpg",
    title: "Chaina",
    tours: "20 Tours",
    place: "15 Palaces",
  },
  {
    img: "https://demos.onepagelove.com/html/tournest/assets/images/gallary/g2.jpg",
    title: "Venuzuala",
    tours: "12 Tours",
    place: "9 Palaces",
  },
  {
    img: "https://demos.onepagelove.com/html/tournest/assets/images/gallary/g3.jpg",
    title: "Brazil",
    tours: "25 Tours",
    place: "10 Palaces",
  },
  {
    img: "https://demos.onepagelove.com/html/tournest/assets/images/gallary/g4.jpg",
    title: "Australia",
    tours: "18 Tours",
    place: "9 Palaces",
  },
  {
    img: "https://demos.onepagelove.com/html/tournest/assets/images/gallary/g5.jpg",
    title: "Netharland",
    tours: "14 Tours",
    place: "12 Palaces",
  },

  {
    img: "https://demos.onepagelove.com/html/tournest/assets/images/gallary/g6.jpg",
    title: "Turkey",
    tours: "14 Tours",
    place: "6 Palaces",
  },
];
