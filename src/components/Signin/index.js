import React from 'react';
import useStyles from './styles';
import {CssBaseline,
TextField,
Avatar,
Checkbox,
FormControl,
FormControlLabel,
Button,
Grid } from "@material-ui/core";
import {Link} from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import FacebookIcon from '@material-ui/icons/Facebook';

function SignIn() {
    const classes = useStyles();

    return (
        <Grid container component="main" spacing={3} className={classes.root}>
            <CssBaseline ></CssBaseline>
            <Grid item xs={false} sm={4} md={7} className={classes.image} >    
            </Grid>
            <Grid item xs={12} sm={8} md={5} >
                <div className={classes.paper}>
                    <Grid container>
                        <Grid item xs className={classes.linkGroup}>
                            <ArrowBackIosIcon fontSize="small" 
                            ></ArrowBackIosIcon>
                            <Link className={classes.link}>
                                Homepage
                            </Link>
                        </Grid>
                    </Grid>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon></LockOutlinedIcon>
                    </Avatar>
                    <FormControl className={classes.form}>
                       
                        <TextField
                        id="username"
                        type='text'
                        placeholder="Username *"
                        autoFocus
                        fullWidth
                        variant="outlined"
                        className={classes.inputText}></TextField>
                        <TextField
                        id="password"
                        type='text'
                        placeholder="Password *"
                        fullWidth
                        variant="outlined"
                        className={classes.inputText}></TextField>
                        <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                        />
                        <Button
                        className={classes.button}
                        >Sign In</Button>
                        <Grid container justify="space-between" spacing="1">
                            <Grid item xs sm={6} md={6}>
                                <Button 
                                fullWidth 
                                style={{
                                    backgroundColor: "#3b5998",
                                    color: "white",
                                }}
                                startIcon={<FacebookIcon/>}>
                                    Sign in with Facebook
                                </Button>
                            </Grid>
                            <Grid item xs sm={6} md={6}>
                                <Button 
                                fullWidth
                                style={{
                                    backgroundColor: "#DB4437",
                                    color: "white",
                                }}>
                                    Sign in with Google
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs className={classes.linkGroup}>
                                <Link className={classes.link}>
                                    Fogot password?
                                </Link>
                            </Grid>
                            <Grid item className={classes.linkGroup}>
                                <Link className={classes.link}>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </FormControl>
                </div>
            </Grid>
        </Grid>
    )
}

export default SignIn;
