import React,{useState} from 'react';
import useStyles from './styles';
import {CssBaseline,
TextField,
Avatar,
Checkbox,
FormControlLabel,
Button,
Grid } from "@material-ui/core";
import {Link} from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import FacebookIcon from '@material-ui/icons/Facebook';
import Service from "./services";
import {toast} from 'react-toastify';
import {useDispatch} from 'react-redux';
import ReduxAction from '../../store/actions';
import axios from "axios";

function SignIn() {
    const classes = useStyles();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const handlePassword = (e) =>{setPassword(e.target.value)}
    const handleUsername = (e) =>{setUsername(e.target.value)}

    const handleLogin = async (e) =>{
        e.preventDefault();
        
        if(password.length <= 1)
        {
            toast.error("password is more than 6 character", {
                position: toast.POSITION.TOP_RIGHT,
            });
        }

        const result = await Service.login(username, password);
        
        console.log(result);
        if (result[0] === "success")
        {
            dispatch(ReduxAction.AUTH.updateJwtToken(result[1].jwtAction));
        }
        else{
            toast.error(result.error, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    }

    const loginWithGoogle = ()=>{
        const result = Service.loginWithGoogleAccount();
        //console.log(result);
        // if (result[0] === "success")
        // {
        //     //dispatch(ReduxAction.AUTH.updateJwtToken(result[1].jwtAction));
        // }
        // else{
        //     toast.error(result.error, {
        //         position: toast.POSITION.TOP_RIGHT,
        //     });
        // }
    }
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline ></CssBaseline>
            <Grid item xs={false} sm={4} md={7} className={classes.image} >    
            </Grid>
            <Grid item 
            container spacing={1}
            xs={12} sm={8} md={5} 
            className={classes.paper}>
                <Grid item container>
                    <Grid item xs className={classes.linkGroup}>
                        <ArrowBackIosIcon fontSize="small" 
                        ></ArrowBackIosIcon>
                        <Link className={classes.link}
                        to="/">
                            Homepage
                        </Link>
                    </Grid>
                </Grid>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon></LockOutlinedIcon>
                </Avatar>
                <form className={classes.form}
                onSubmit={handleLogin}> 
                    <TextField
                    id="username"
                    type='text'
                    margin="normal"
                    required
                    placeholder="Username *"
                    autoFocus
                    fullWidth
                    variant="outlined"
                    className={classes.inputText}
                    onChange={handleUsername}></TextField>
                    <TextField
                    id="password"
                    type='password'
                    placeholder="Password *"
                    margin="normal"
                    required
                    fullWidth
                    variant="outlined"
                    className={classes.inputText}
                    onChange={handlePassword}></TextField>
                    <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                    />
                    <Button
                    type="submit"
                    className={classes.button} 
                    fullWidth                      
                    >Sign In</Button>
                    <Grid container justify="space-around" spacing={1}>
                        <Grid container item xs sm={6} md={6} spacing={1}>
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
                        <Grid container item xs sm={6} md={6} spacing={1}>
                            <Button 
                            fullWidth
                            onClick={loginWithGoogle}
                            style={{
                                backgroundColor: "#DB4437",
                                color: "white",
                            }}>
                                Sign in with Google
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs className={classes.linkGroup}>
                            <Link className={classes.link}
                            to="/fogot-password">
                                Fogot password?
                            </Link>
                        </Grid>
                        <Grid item className={classes.linkGroup}>
                            <Link className={classes.link}
                            to="/signup">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
}

export default SignIn;
