import * as React from "react";
import { Button, Grid, Box, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MoveToInboxOutlinedIcon from "@mui/icons-material/MoveToInboxOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";

const menuData = [
  { id: 1, name: "Home", icon: <HomeOutlinedIcon sx={{ fontSize: "32px" }} /> },
  {
    id: 2,
    name: "Catalog",
    icon: <MoveToInboxOutlinedIcon sx={{ fontSize: "32px" }} />,
  },
  {
    id: 3,
    name: "Orders",
    icon: <ShoppingCartOutlinedIcon sx={{ fontSize: "32px" }} />,
  },
  {
    id: 4,
    name: "Customers",
    icon: <PermIdentityOutlinedIcon sx={{ fontSize: "32px" }} />,
  },
  {
    id: 5,
    name: "Discounts",
    icon: <SellOutlinedIcon sx={{ fontSize: "32px" }} />,
  },
  {
    id: 6,
    name: "Pages",
    icon: <DescriptionOutlinedIcon sx={{ fontSize: "32px" }} />,
  },
  {
    id: 7,
    name: "Apps",
    icon: <WidgetsOutlinedIcon sx={{ fontSize: "32px" }} />,
  },
  {
    id: 8,
    name: "Translation",
    icon: <LanguageOutlinedIcon sx={{ fontSize: "32px" }} />,
  },
  {
    id: 9,
    name: "Configuration",
    icon: <SettingsOutlinedIcon sx={{ fontSize: "32px" }} />,
  },
];

function SideMenu() {
  return (
    <div>
      <Grid container item xs={4} md={9}>
        <Grid item sx={12} md={12}>
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: "900",
              textAlign: "center",
            }}
          >
            S
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box>
            <CssBaseline />

            <Box>
              <List>
                {menuData.map((item) => (
                  <ListItem
                    key={item.id}
                    disablePadding
                    sx={{
                      marginBottom: "10px",
                    }}
                  >
                    <ListItemButton>
                      <ListItemIcon sx={{ width: "auto" }}>
                        {item.icon}
                      </ListItemIcon>
                      <Typography
                      variant="h5"
                        sx={{
                          color: "grey",
                          fontWeight: "700",
                          fontSize: "18px",
                          textAlign: "center",
                        }}>{item.name}</Typography>
                      
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Button
              variant="outlined"
              sx={{ backgroundColor: "#f3f3f3", padding: 1, margin: 1 }}
            >
              <KeyboardArrowLeftOutlinedIcon />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default SideMenu;
