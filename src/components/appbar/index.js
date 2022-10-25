import { Button, Grid, Box } from "@mui/material";
import BoltSharpIcon from "@mui/icons-material/BoltSharp";
import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 2.5 + ITEM_PADDING_TOP,
      maxWidth: 100,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function AppBar() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
      <Grid container columnSpacing={4} sx={{maxWidth:'100%', marginTop:'16px'}} justifyContent="flex-end" >
        <Grid item xs={10} md={1}>
          <Button
            variant="text"
            sx={{ color: "grey", backgroundColor: "#ffffff", padding: 2 }}
          >
            <BoltSharpIcon />
          </Button>
        </Grid>
        <Grid item xs={10} md={2}>
          <FormControl sx={{ width: 200, height: 20 , backgroundColor:"#ffffff"}}>
            <InputLabel id="demo-multiple-name-label" sx={{backgroundColor:"#ffffff"}}>Select</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              sx={{backgroundColor:"#ffffff"}}
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                sx={{backgroundColor:"#ffffff"}}
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={10} md={2} >
          <Box sx={{ display: "flex", alignItems: "center", justifyContent:"center", backgroundColor:"#ffffff", borderRadius:"5px" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="User ID"
              disabled
              variant="standard"
              sx={{ paddingBottom:1}}
            />
          </Box>
        </Grid>
      </Grid>
  );
}

export default AppBar;
