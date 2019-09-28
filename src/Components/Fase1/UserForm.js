import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import lightBlue from "@material-ui/core/colors/lightBlue";

import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  button:{
    color: lightBlue[600]
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));

const Countries = [
  {
    value: "CR",
    label: "Costa Rica"
  },
  {
    value: "US",
    label: "United States"
  },
  {
    value: "MEX",
    label: "Mexico"
  },
  {
    value: "CAN",
    label: "Canada"
  }
];

export default function SimpleContainer() {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    phone2: "",
    city: "",
    state: "",
    address: "",
    zipcode: "",
    country: ""
  });

  const [errors, setErrors] = useState({
    firstname: false,
    lastname: false,
    phone: false,
    phone2: false,
    city: false,
    state: false,
    address: false,
    zipcode: false,
    country: false
  });

  const handleChange = name => event => {
    setFormData({ ...formData, [name]: event.target.value });
  };

  const resetForm = () => {
    setFormData({
      firstname: "",
      lastname: "",
      phone: "",
      phone2: "",
      city: "",
      state: "",
      address: "",
      zipcode: "",
      country: ""
    });
  };

  const resetErrors = () => {
    setErrors({
      firstname: false,
      lastname: false,
      phone: false,
      phone2: false,
      city: false,
      state: false,
      address: false,
      zipcode: false,
      country: false
    });
  };

  const generateToast = (err, msg) => {
    const red =
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(215,14,14,1) 99%, rgba(0,212,255,1) 100%)";
    const green =
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(139,213,86,1) 0%)";
    if (err) {
      Toastify({
        text: msg,
        duration: 5000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        backgroundColor: red,
        className: "info",
        stopOnFocus: true // Prevents dismissing of toast on hover
      }).showToast();
    } else {
      Toastify({
        text: msg,
        duration: 5000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        backgroundColor: green,
        className: "info",
        stopOnFocus: true // Prevents dismissing of toast on hover
      }).showToast();
    }
  };

  const validateFields = () => {
    let error = "";
    let errorObj = {};

    for (var item in formData) {
      if (formData[item] === "") {
        errorObj[item] = true;
        error = true;
      } else if (errors[item] === true) {
        errorObj[item] = false;
        error = false;
      }
    }

    if (error === true) {
      const msg = "All fields are required";
      setErrors(errorObj);
      generateToast(true, msg);
    } else {
      const msg = "Form sent succesfully";
      resetErrors();
      resetForm();
      generateToast(false, msg);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" style={{ height: "100vh" }}>
        <Typography variant="h6" gutterBottom>
          Fase 1 || User Form:
        </Typography>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            error={errors.firstname}
            label="Firstname"
            className={classes.textField}
            onChange={handleChange("firstname")}
            margin="normal"
            value={formData.firstname}
          />
          <TextField
            error={errors.lastname}
            label="Lastname"
            className={classes.textField}
            onChange={handleChange("lastname")}
            margin="normal"
            value={formData.lastname}
          />
          <TextField
            error={errors.phone}
            label="Phone number"
            type="number"
            className={classes.textField}
            onChange={handleChange("phone")}
            margin="normal"
            value={formData.phone}
          />
          <TextField
            error={errors.phone2}
            label="Phone number 2"
            className={classes.textField}
            onChange={handleChange("phone2")}
            type="number"
            margin="normal"
            value={formData.phone2}
          />
          <TextField
            error={errors.zipcode}
            label="Zip code"
            className={classes.textField}
            onChange={handleChange("zipcode")}
            margin="normal"
            value={formData.zipcode}
            type="number"
          />
          <TextField
            error={errors.city}
            label="City"
            className={classes.textField}
            onChange={handleChange("city")}
            margin="normal"
            value={formData.city}
          />
          <TextField
            error={errors.state}
            label="State"
            className={classes.textField}
            onChange={handleChange("state")}
            margin="normal"
            value={formData.state}
          />
          <TextField
            error={errors.country}
            select
            label="Select"
            className={classes.textField}
            value={formData.country}
            onChange={handleChange("country")}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            helperText="Please select your Country"
            margin="normal"
          >
            {Countries.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            error={errors.address}
            label="Address"
            className={classes.textField}
            onChange={handleChange("address")}
            margin="normal"
            value={formData.address}
          />
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            onClick={validateFields}
          >
            Submit
          </Button>
        </form>
      </Container>
    </React.Fragment>
  );
}
