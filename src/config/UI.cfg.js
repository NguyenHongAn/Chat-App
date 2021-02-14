import { createMuiTheme } from '@material-ui/core/styles';
import {pink, lightBlue} from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary:{
            main: lightBlue[700],
            dark: "#005b9f",
            light: "#5eb8ff",
            contrastText: "white"
        },
        secondary: {
            main: pink[600],
            dark: "##a00037",
            light: "##ff5c8d"
        }
    }
});

export default theme;