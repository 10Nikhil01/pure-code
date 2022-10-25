import React from "react";
import { Button, Grid, Box, Typography } from "@mui/material";
import Activity from "../activity";
function Main() {
  return (
    <Grid item container xs={12} md={12} rowGap={6} >
      <Grid item xs={12} md={12}>
        <Typography variant="h3" fullWidth sx={{ fontWeight: "900" }}>
          Hello There, admin@example.com
        </Typography>
        <Typography variant="h5" fontWeight={400}>
          Here is some information we gathered about your store
        </Typography>
      </Grid>
      <Grid item container xs={6} md={12} columnGap={5}>
        <Grid item xs={6} md={4} sx={{backgroundColor:"#ffffff", borderRadius:"10px", padding:"1.5rem"}}>
          <Typography variant="h5" sx={{ fontWeight: "500" }}>
            Sales
          </Typography>
          <Typography variant="subtitle2" sx={{color:"grey",fontSize:"15px" ,fontWeight:"400"}}>
            Today
          </Typography>
        </Grid>
        <Grid item xs={6} md={4} sx={{backgroundColor:"#ffffff", borderRadius:"10px", padding:"1.5rem"}}>
          <Typography variant="h5" sx={{ fontWeight: "500" }}>
            Orders
          </Typography>
          <Typography variant="subtitle2" sx={{color:"grey",fontSize:"15px" ,fontWeight:"400"}}>
            Today
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
        <Activity />
      </Grid>
      </Grid>

      
    </Grid>
  );
}

export default Main;
