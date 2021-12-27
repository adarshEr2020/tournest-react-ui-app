import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const countries = [
  "Enter Your Destination Country",
  "India",
  "Brazil",
  "China",
  "Austrila",
];

function getStyles(country, countryName, theme) {
  return {
    fontWeight:
    countryName.indexOf(country) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function TabFromFeild() {
  const theme = useTheme();
  const [countryName, setCountryName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCountryName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Country</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={countryName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {countries.map((country,index) => (
            <MenuItem
              key={index}
              value={country}
              style={getStyles(country, countryName, theme)}
            >
              {country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
    </div>
  );
}
