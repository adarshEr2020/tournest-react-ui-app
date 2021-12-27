import React from "react";
import { Button, Tab, Tabs, FormLabel,Box } from "@mui/material";
import "../css/FullWidthTabs.css";
import TabFromFeild from "./TabFromFeild";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function FullWidthTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="tabSection">
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab
          label="Tours"
          className="tabColor"
          sx={{
            backgroundColor: "#00d8ff",
            color: "#ffffff",
            border: "1px solid white",
          }}
        />
        <Tab
          label="Hotels"
          className="tabColor"
          sx={{
            backgroundColor: "#00d8ff",
            color: "#ffffff",
            border: "1px solid white",
          }}
        />
        <Tab
          label="Flights"
          className="tabColor"
          sx={{
            backgroundColor: "#00d8ff",
            color: "#ffffff",
            border: "1px solid white",
          }}
        />
      </Tabs>
      <div className="fromFeild3">
        <div className="firstCol-contain">
          <TabPanel value={value} index={0}>
            <div className="firstContain">
              <FormLabel sx={{ marginLeft: "8px" }}>Destination</FormLabel>
              <TabFromFeild />
              <br />
              <TabFromFeild />
            </div>
            <div className="secContain">
              <FormControl>
                <FormLabel>Check In</FormLabel>
                <Select>
                  <MenuItem>1</MenuItem>
                  <MenuItem>2</MenuItem>
                  <MenuItem>3</MenuItem>
                </Select>
              </FormControl>
            </div> 
           <div className="thirdContain">
              <FormControl>
                <FormLabel>Check out</FormLabel>
                <Select>
                  {" "}
                  <MenuItem>1</MenuItem>
                  <MenuItem>2</MenuItem>
                  <MenuItem>3</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="FourthContain">
              <FormControl>
                <FormLabel>Duration</FormLabel>
                <Select>
                  {" "}
                  <MenuItem>1</MenuItem>
                  <MenuItem>2</MenuItem>
                  <MenuItem>3</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="FifthContain">
              <FormControl>
                <FormLabel>Members</FormLabel>
                <Select>
                  {" "}
                  <MenuItem>1</MenuItem>
                  <MenuItem>2</MenuItem>
                  <MenuItem>3</MenuItem>
                </Select>
              </FormControl>
            </div>
          </TabPanel>
          
        </div>

        <div className="firstCol-contain">
          <TabPanel value={value} index={1}>
          <div className="firstContain">
              <FormLabel sx={{ marginLeft: "8px" }}>Destination</FormLabel>
              <TabFromFeild />
              <br />
              <TabFromFeild />
            </div>
            <div className="secContain">
              <FormControl>
                <FormLabel>Check In</FormLabel>
                <Select>
                  <MenuItem>1</MenuItem>
                  <MenuItem>2</MenuItem>
                  <MenuItem>3</MenuItem>
                </Select>
              </FormControl>
            </div> 
           <div className="thirdContain">
              <FormControl>
                <FormLabel>Check out</FormLabel>
                <Select>
                  {" "}
                  <MenuItem>1</MenuItem>
                  <MenuItem>2</MenuItem>
                  <MenuItem>3</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="FourthContain">
              <FormControl>
                <FormLabel>Duration</FormLabel>
                <Select>
                  {" "}
                  <MenuItem>1</MenuItem>
                  <MenuItem>2</MenuItem>
                  <MenuItem>3</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="FifthContain">
              <FormControl>
                <FormLabel>Members</FormLabel>
                <Select>
                  {" "}
                  <MenuItem>1</MenuItem>
                  <MenuItem>2</MenuItem>
                  <MenuItem>3</MenuItem>
                </Select>
              </FormControl>
            </div>
          </TabPanel>
        </div>
        <div className="firstCol-contain">
          <TabPanel value={value} index={2}>
            <div className="firstContain">
              <FormLabel sx={{ marginLeft: "8px" }}>Destination</FormLabel>
              <TabFromFeild />
              <br />
              <TabFromFeild />
            </div>
            <div className="secContain">
              <FormControl>
                <FormLabel>Check In</FormLabel>
                <Select>
                  <MenuItem>1</MenuItem>
                  <MenuItem>2</MenuItem>
                  <MenuItem>3</MenuItem>
                </Select>
              </FormControl>
            </div> 
           <div className="thirdContain">
              <FormControl>
                <FormLabel>Check out</FormLabel>
                <Select>
                  {" "}
                  <MenuItem>1</MenuItem>
                  <MenuItem>2</MenuItem>
                  <MenuItem>3</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="FourthContain">
              <FormControl>
                <FormLabel>Duration</FormLabel>
                <Select>
                  {" "}
                  <MenuItem>1</MenuItem>
                  <MenuItem>2</MenuItem>
                  <MenuItem>3</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="FifthContain">
              <FormControl>
                <FormLabel>Members</FormLabel>
                <Select>
                  {" "}
                  <MenuItem>1</MenuItem>
                  <MenuItem>2</MenuItem>
                  <MenuItem>3</MenuItem>
                </Select>
              </FormControl>
            </div>
          </TabPanel>
        </div>
        
      </div>
      <div className="search-btn">
            <Button
              size="large"
              variant="contained"
              sx={{ backgroundColor: "#00d8ff" }}
            >
              Search
            </Button>
          </div>
    </Box>
  );
}

const TabPanel = (props) => {
  const { children, value, index } = props;
  return value === index && <h2>{children}</h2>;
};
