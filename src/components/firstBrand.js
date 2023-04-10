import React from 'react'
import { Description, Subtitle } from "@storybook/blocks";
import { within, userEvent } from "@storybook/testing-library";
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
  object,
  color
} from "@storybook/addon-knobs";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
const firstBrand = () => {
  const options = {
    Red: "#F6F6F6",
    Blue: "#E6F1FA",
    Yellow: "0057B7",
  };
  const value = object(`style`, options, `styleId-1`);
  return (
    <Grid
      container
      spacing={2}
      item
      xs={12}
      sx={{
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        marginTop: "6%",
        marginLeft: "4%",
        paddingBottom: "5%",
      }}
    >
      <Grid item xs={6}>
      <div className={boolean('Direction')?'colDirection':'rowDirection'} style={{backgroundColor:color('Component-Background-Config', "#F6F6F6" )}}>
        <h1
          style={{ marginLeft: "20%", color: "#2e7d32", backgroundColor:color('Textbox-Background-config', "#ffffff") }}
          className={(!boolean("Underline") ? "lss" : "underline")}
          h1Name={
            (text("Label", "POSSIT ETIMAM"),
            boolean("Underline", false),
            boolean("Direction", false)
            )
          }
        >
          {text("Label", "POSSIT ETIMAM")
            ? text("Label", "POSSIT ETIMAM")
            : "POSSIT ETIMAM"}
        </h1>
        <p style={{ marginLeft: "20%", fontSize: "14px" }}>Morbi eget efficitur nunc</p>
        </div>
      </Grid>
      <Grid item xs={6}>
        <p>
          A stavacation with the kids is always a good idea especially at Dubia's family resort!<br/>
           Memorable bonding time with complimentary lunch or dinner at Gordon Ramsay's <br/>Bread Street Kitchen*, activities  kids, one hour free watersports in the Arabian Sea <br/> and so much more! 
           we're sure to keep the little ones entertained
        </p>
        <Button
          variant="contained"
          color="success"
          style={{ marginRight: "15px" }}
          buttonName={text("Label", "Click Me")}
          onClick={()=>{window.location.href="https://reactjs.org/"}}
        >
          Buy Ticket
        </Button>
        <Button
          variant="outlined"
          color="success"
          buttonName={text("Label", "Click Me")}
          onClick={()=>{window.location.href="https://reactjs.org/"}}
        >
          Buy Ticket
        </Button>
      </Grid>
    </Grid>
  )
}

export default firstBrand
