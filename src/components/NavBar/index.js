import React from 'react';
import {AppBar, 
  Toolbar, 
  IconButton, 
  MenuIcon, 
  Typography, 
  Button} from "@material-ui/core";
import useStyles from "./styles";

function NavBar () {
  const classes = useStyles();
     return (
        <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
     );
}
export default NavBar;