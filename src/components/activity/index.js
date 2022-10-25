import React from "react";
import {Grid, Typography, List, ListItem } from "@mui/material";

const orderID = [
  { id: 1, orderid: "#5656", ordertime: "a day" },
  { id: 1, orderid: "#5657", ordertime: "a day" },
  { id: 1, orderid: "#5658", ordertime: "two days" },
  { id: 1, orderid: "#5654", ordertime: "a day" },
  { id: 1, orderid: "#5634", ordertime: "two days" },
  { id: 1, orderid: "#5216", ordertime: "a day" },
  { id: 1, orderid: "#5656", ordertime: "two days" },
  { id: 1, orderid: "#5896", ordertime: "a day" },
  { id: 1, orderid: "#5096", ordertime: "two days" },
  { id: 1, orderid: "#5876", ordertime: "a day" },
  { id: 1, orderid: "#5006", ordertime: "two days" },
];

function Activity() {
  return (
    <div
      className="main"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-around",
        marginLeft:1, paddingLeft:"1.5rem",
        background:"#ffffff",
        borderRadius:"10px"
    
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "500", margin: 1 ,
        padding: "1.5rem"}}>
        Activity
      </Typography>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {orderID.map((item) => (
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-around",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "400" }}>
              Order {item.orderid} was placed
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "grey" }}>
              {item.ordertime} ago
            </Typography>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Activity;
