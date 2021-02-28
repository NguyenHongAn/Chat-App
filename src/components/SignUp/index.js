import React,{useState} from 'react';
import useStyles from './styles';
import {CssBaseline,
TextField,
Avatar,
Checkbox,
FormControlLabel,
Button,
Grid,
Typography } from "@material-ui/core";
import {Link} from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import Service from "./services";
import {toast} from 'react-toastify';
import {useDispatch} from 'react-redux';
import ReduxAction from '../../store/actions';


function SignUp () {
    const classes = useStyles();
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    //const [rePass, setRePass] = useState("");

    //const handlePassword = (e) => setPassword(e.target.value);
    const handleUsername = (e) => setUsername(e.target.value);
    const handleEmail= (e) => setEmail(e.target.value);
    const validatePassword =(e)=>{
        const result = Service.validatePassword(password, e.target.value);
        if (result[0] !== "Success")
        {
            toast.error(result[1],{
                position: toast.POSITION.TOP_RIGHT,
                draggable: false,
            });
        }
        else
        {
            setPassword(e.target.value);
        }
    }
    const createNewAccount = () =>{

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
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form}
                onSubmit={createNewAccount}
                > 
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
                    onChange={handleUsername}
                    ></TextField>
                    <TextField
                    id="email"
                    type='text'
                    margin="normal"
                    required
                    placeholder="Email *"
                    autoFocus
                    fullWidth
                    variant="outlined"
                    className={classes.inputText}
                    onChange={handleEmail}
                    ></TextField>
                    <TextField
                    id="password"
                    type='password'
                    placeholder="Password *"
                    margin="normal"
                    required
                    fullWidth
                    onChange={validatePassword}
                    variant="outlined"
                    className={classes.inputText}
                    ></TextField>
                    <TextField
                    id="rePassword"
                    type='password'
                    placeholder="Re Password *"
                    margin="normal"
                    required
                    fullWidth
                    variant="outlined"
                    className={classes.inputText}
                    onChange={validatePassword}
                    ></TextField>
                    <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Accept with the rule of website"
                    />
                    <Button
                    type="submit"
                    className={classes.button} 
                    fullWidth                      
                    >Sign Up</Button>
                    <Grid container spacing={1}>
                        <Grid item className={classes.linkGroup}>
                            <Link className={classes.link}
                            to="/signup">
                                {"Already have an account? Sign in"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
}
export default SignUp;