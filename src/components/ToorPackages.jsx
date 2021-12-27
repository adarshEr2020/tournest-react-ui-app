import { Card, Container, Typography } from "@mui/material";
import React from "react";
import "../css/ToorPackages.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
export default function ToorPackages() {
  return (
    <div>
      <div className="package-contain-txt">
        <Typography variant="h4" component="h2" color="gray">
          Special Packages
        </Typography>
        <br />
        <Typography>
          Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla.
        </Typography>
      </div>

      <Container
        style={{
          width: "100%",
          // border: "1px solid blue",
          display: "flex",
          flexFlow: "wrap",
          justifyContent: "space-between",
        }}
      >
        {packages.map((item, index) => (
          <Card
            elevation={5}
            key={index}
            sx={{
              maxWidth: 360,
              height: 545,
              display: "grid",
              justifyContent: "space-between",
              marginBottom: "5%",
            }}
          >
            <CardMedia component="img" alt="green iguana" image={item.img} />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>{item.country} </span>
                <span>{item.ammount} </span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <div className="card-content">
                  <div className="card-content-row2">
                    <span>5 Daays6 Nights Accomodation</span>
                    <span>5 Star</span>
                  </div>
                  <div className="card-content-row2">
                    <span> Transportation</span> <span>Food Facilities</span>
                  </div>
                  <div className="card-content-row2">
                    <span>
                      <Rating
                        name="half-rating"
                        defaultValue={2.5}
                        precision={0.5}
                      />
                    </span>
                    <span>2544 Review</span>
                  </div>
                  <span></span>
                </div>
              </Typography>
              <Button
                size="small"
                variant="contained"
                sx={{ marginTop: "2%", backgroundColor: "#00d8ff" }}
              >
                Book Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </Container>
    </div>
  );
}

const packages = [
  {
    img: "https://demos.onepagelove.com/html/tournest/assets/images/packages/p1.jpg",
    country: "Italy",
    ammount: "$499",
  },
  {
    img: "https://demos.onepagelove.com/html/tournest/assets/images/packages/p2.jpg",
    country: "England",
    ammount: "$1499",
  },
  {
    img: "https://demos.onepagelove.com/html/tournest/assets/images/packages/p3.jpg",
    country: "France",
    ammount: "$1199",
  },
  {
    img: "https://demos.onepagelove.com/html/tournest/assets/images/packages/p4.jpg ",
    country: "India",
    ammount: "$799",
  },
  {
    img: "https://demos.onepagelove.com/html/tournest/assets/images/packages/p5.jpg",
    country: "Spain",
    ammount: "$999",
  },
  {
    img: "https://demos.onepagelove.com/html/tournest/assets/images/packages/p6.jpg",
    country: "Thailand",
    ammount: "$799",
  },
];

console.log(packages);
