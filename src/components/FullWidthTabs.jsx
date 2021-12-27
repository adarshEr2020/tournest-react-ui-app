import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import '../css/FullWidthTabs.css';

export default function FullWidthTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tabSection">
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
            border: "1px solid white",
          }}
        />
        <Tab
          label="Hotels"
          className="tabColor"
          sx={{ backgroundColor: "#00d8ff", border: "1px solid white" }}
        />
        <Tab
          label="Flights"
          className="tabColor"
          sx={{ backgroundColor: "#00d8ff", border: "1px solid white" }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        
        </TabPanel>
        <TabPanel value={value} index={1}>
          2
        </TabPanel>
        <TabPanel value={value} index={2}>
          3
        </TabPanel>
      
    </div>
  );
}

const TabPanel = (props) => {
  const { children, value, index } = props;
  return value == index && <h2>{children}</h2>;
};
