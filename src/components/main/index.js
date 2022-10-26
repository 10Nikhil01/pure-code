import React from "react";
import { Button, Grid, Typography,Divider } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Activity from "../activity";


function Main() {
  return (
    <Grid item container xs={12} md={12} rowGap={2}>
      <Grid item xs={12} md={12}>
        <Typography variant="h3"  fullWidth sx={{ fontWeight: "900" }}>
          Hello There, admin@example.com
        </Typography>
        <Typography variant="h5" sx={{fontWeight:"400"}}>
          Here is some information we gathered about your store
        </Typography>
      </Grid>
      <Grid item container xs={6} md={8} columnGap={8} rowGap={0}>
        <Grid
          item
          xs={6}
          md={5}
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            padding: "1.5rem",
            position: "relative",
            height: "fit-content",
          }}
        >
          <div>
            <div>
              <Typography variant="h5" sx={{ fontWeight: "500" }}>
                Sales
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: "grey", fontSize: "15px", fontWeight: "400" }}
              >
                Today
              </Typography>
            </div>
            <Button
              sx={{
                color: "blue",
                minHeight: "1.5rem",
                padding: 2,
                paddingBottom: 3,
                paddingTop: 3,
                borderRadius: "10px",
                backgroundColor: "#f3f3f3",
                position: "absolute",
                right: 0,
                top: 0,
                margin: 2,
                marginBottom: 0,
              }}
            >
              <TrendingUpIcon sx={{ fontSize: "56px" }} />
            </Button>
          </div>
          <Typography variant="h4" sx={{ marginTop: 1, marginLeft: 4 }}>
            PLN 0.00
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          md={5}
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            padding: "1.5rem",
            position: "relative",
            height: "fit-content",
          }}
        >
          <div>
            <div>
              <Typography variant="h5" sx={{ fontWeight: "500" }}>
                Orders
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: "grey", fontSize: "15px", fontWeight: "400" }}
              >
                Today
              </Typography>
            </div>
            <Button
              sx={{
                color: "blue",
                minHeight: "1.5rem",
                padding: 2,
                paddingBottom: 3,
                paddingTop: 3,
                borderRadius: "10px",
                backgroundColor: "#f3f3f3",
                position: "absolute",
                right: 0,
                top: 0,
                margin: 2,
              }}
            >
              <PlaylistAddCheckIcon sx={{ fontSize: "56px" }} />
            </Button>
          </div>
          <Typography variant="h4" sx={{ marginTop: 1, textAlign: "center" }}>
            0
          </Typography>
          <Grid item xs={12} md={12}></Grid>
          <Grid item xs={12} md={12}></Grid>
        </Grid>
        <Grid item xs={12} md={11} sx={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            height: "fit-content",
          }}>
            <Button sx={{color:"black", margin:1,padding:3,paddingBottom:1,paddingTop:1,width:"100%",display:"flex", alignItem:"center",justifyContent:"space-between"}}>6 orders are ready to fulfull <ChevronRightIcon /></Button>
            <Divider />
            <Button sx={{color:"black",margin:1,padding:3,paddingBottom:1,paddingTop:1,width:"100%",display:"flex", alignItem:"center",justifyContent:"space-between"}}>3 payments to capture <ChevronRightIcon /></Button>
            <Divider />
            <Button sx={{color:"black",margin:1,padding:3,paddingBottom:1,paddingTop:1,width:"100%",display:"flex", alignItem:"center",justifyContent:"space-between"}}>No products are out of capture <ChevronRightIcon /></Button>
        </Grid>
        <Grid item xs={12} md={11} sx={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            height:"fit-content"
          }}>
            <Typography variant='h5' sx={{ fontWeight: "500" ,paddingLeft: "2rem", paddingTop:"2rem"}}>Top Products</Typography>
            <Typography variant='subtitle1' sx={{ fontWeight: "500", padding:"2rem"}}>No products found</Typography>
          </Grid>
      </Grid>
      <Grid item xs={12} md={3}>
        <Activity />
      </Grid>
    </Grid>
  );
}

export default Main;
