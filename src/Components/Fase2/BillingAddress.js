import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));

const states = [
  {
    value: "FL",
    label: "Florida"
  },
  {
    value: "AZ",
    label: "Arizona"
  },
  {
    value: "TX",
    label: "Texas"
  },
  {
    value: "HW",
    label: "Hawaii"
  }
];

export const BillingAddress = props => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    address2: "",
    state: "",
    city: "",
    zipcode: "",
    country: "United States"
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (props.validate === true) {
      validateFields();
    }
  });

  const handleChange = name => event => {
    setFormData({ ...formData, [name]: event.target.value });
  };

  const validateFields = () => {
    let error = '';
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
    setErrors(errorObj);
    props.default(error);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" style={{ height: "100vh" }}>
        <Typography variant="h6" gutterBottom>
          Shipping Adress:
        </Typography>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            error={errors.firstname}
            label="Firstname"
            className={classes.textField}
            onChange={handleChange("firstname")}
            margin="normal"
          />
          <TextField
            error={errors.lastname}
            label="Lastname"
            className={classes.textField}
            onChange={handleChange("lastname")}
            margin="normal"
          />
          <TextField
            error={errors.email}
            label="Email"
            className={classes.textField}
            onChange={handleChange("email")}
            margin="normal"
          />
          <TextField
            error={errors.address}
            label="Address Line 1"
            className={classes.textField}
            onChange={handleChange("address")}
            margin="normal"
          />
          <TextField
            error={errors.address2}
            label="Address Line 2"
            className={classes.textField}
            onChange={handleChange("address2")}
            margin="normal"
          />
          <TextField
            error={errors.city}
            label="City"
            className={classes.textField}
            onChange={handleChange("city")}
            margin="normal"
          />
          <TextField
            error={errors.state}
            select
            label="Select"
            className={classes.textField}
            value={formData.state}
            onChange={handleChange("state")}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            helperText="Please select your State"
            margin="normal"
          >
            {states.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            error={errors.zipcode}
            label="Zip / Postal Code"
            className={classes.textField}
            onChange={handleChange("zipcode")}
            margin="normal"
            type="number"
          />
          <TextField
            disabled
            label="Country"
            value={formData.country}
            className={classes.textField}
            margin="normal"
          />
        </form>
      </Container>
    </React.Fragment>
  );
};
