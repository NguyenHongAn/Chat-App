import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme)=> ({
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
        backgroundColor: theme.palette.secondary.main +"!important",
        margin: theme.spacing(2),
    },
    paper: {
        display:"flex",
        alignItems: "center",
        flexDirection: "column",
        padding: theme.spacing(4,2) + "!important",
    },
    inputText:{
        margin: theme.spacing(1,0),
    },
    button:
    {
        backgroundColor: theme.palette.primary.main + "!important",
        color: theme.palette.primary.contrastText + "!important",
        '&:hover': {
            backgroundColor: theme.palette.primary.dark + "!important",
         },
    },
    linkGroup:{
        display: 'flex',
        alignItems: "center",
        color: theme.palette.primary.main,
        margin: theme.spacing(1,0) + "!important",
    },
    link:{
        textDecoration: "none",
        fontSize: "16px",
        color: theme.palette.primary.main,
        '&:hover': {
            textDecoration: "underline",
         },
    },
}));

export default useStyles;