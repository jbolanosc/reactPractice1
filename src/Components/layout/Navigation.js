import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import lightBlue from "@material-ui/core/colors/lightBlue";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  cyan: {
    background: "white",
    color: lightBlue[500]
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: lightBlue[500],
    textDecoration: "none"
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.cyan}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Practica #1
          </Typography>
          <Button>
            <Link className={classes.menuButton} to="/">
              FASE 1
            </Link>
          </Button>
          <Button>
            <Link className={classes.menuButton} to="/fase2">
              FASE 2
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
