import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        height: "100vh",
        width: "100%",
    },
    image:{
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }, 
    form: {
        width: '100%', 
    },
    avatar: {
        backgroundColor: theme.palette.secondary.main,
        margin: theme.spacing(2),
    },
    paper: {
        display: "flex",
        //justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: theme.spacing(4,2),
    },
    inputText:{
        margin: theme.spacing(1,0),
    },
    button:
    {
        margin: theme.spacing(2,0),
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
         },
    },
    linkGroup:{
        display: 'flex',
        alignItems: "center",
        color: theme.palette.primary.main,
        margin: theme.spacing(2,0),
    },
    link:{
        textDecoration: "none",
        fontSize: "16px",
        color: theme.palette.primary.main,
    },
    linkIcon: {
        //color: theme.palette.primary.light,
    },
    buttonGrid: {

    }
    
}));

export default useStyles;