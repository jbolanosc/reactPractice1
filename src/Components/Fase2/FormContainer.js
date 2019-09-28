import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import lightBlue from "@material-ui/core/colors/lightBlue";
import Button from "@material-ui/core/Button";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

import { BillingAddress } from "./BillingAddress";
import { ShippingAddress } from "./ShippingAddress";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 2,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    flexGrow: 1,
  },
  cyan: {
    backgroundColor: lightBlue[600]
  },
  button: {
    padding: "12%",
    borderRadius: "60%",
    left: "40%",
    color: lightBlue[600]
  },
  flexgrid: {
    backgroundColor: lightBlue[600],
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  const [option, setOption] = useState({
    validate: false
  });

  function validateFields() {
    setOption({
      validate: true
    });
  }

  function setDefault(err) {
    setOption({
      validate: false
    });
    if (err === true) {
      Toastify({
        text: "All fields are required",
        duration: 5000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(215,14,14,1) 99%, rgba(0,212,255,1) 100%)",
        className: "info",
        stopOnFocus: true // Prevents dismissing of toast on hover
      }).showToast();
    } else  if(err === false){
      Toastify({
        text: "Form sent",
        duration: 5000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(139,213,86,1) 0%)",
        className: "info",
        stopOnFocus: true // Prevents dismissing of toast on hover
      }).showToast();
    }
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={12}>
        <Grid item xs={5} className={classes.cyan}>
          <ShippingAddress
            default={setDefault}
            validate={option.validate}
            className={classes.paper}
          />
        </Grid>
        <Grid item xs={1} className={classes.flexgrid}>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            onClick={validateFields}
          >
            Submit
          </Button>
        </Grid>
        <Grid item xs={5}>
          <BillingAddress
            default={setDefault}
            validate={option.validate}
            className={classes.paper}
          />
        </Grid>
      </Grid>
    </div>
  );
}
