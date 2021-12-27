import React from "react";
import { Container, Typography } from "@mui/material";
import "../css/TopDestination.css";
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
      <Container className="Imgcontainer">
        <div className="destination-cotain1">
          <div className="destiTextInfo">
            Chaina <br />
            20 Tours <br /> 15 Palaces
          </div>
        </div>
        <div className="destination-cotain2">
          <div className="destiTextInfo">
          Venuzuala <br />
          12 Tours <br /> 9 Palaces
          </div>
        </div>
        <div className="destination-cotain3">
          <div className="destiTextInfo1">
          Brazil <br />
            25 Tours <br /> 10 Palaces
          </div>
        </div>
        <div className="destination-cotain4">
          <div className="destiTextInfo">
          Australia <br />
            28 Tours <br /> 9 Palaces
          </div>
        </div>
        <div className="destination-cotain5">
          <div className="destiTextInfo">
          Netharland <br />
            14 Tours <br /> 12 Palaces
          </div>
        </div>
        <div className="destination-cotain6">
          <div className="destiTextInfo">
          Turkey <br />
            14 Tours <br /> 6 Palaces
          </div>
        </div>
      </Container>
    </>
  );
}
