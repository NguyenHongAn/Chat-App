import {BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import {useSelector} from 'react-redux';
import RealTimeSocket from './realtime';
import Auth from './containers/Auth';
import {ThemeProvider} from "@material-ui/core";
import theme from "./config/UI.cfg";
import { ToastContainer } from 'react-toastify';


function App() {  
    //RealTimeSocket.getInstance();
    const jwtToken = useSelector(state => state.auth.jwtToken);
    
    return (
        <ThemeProvider theme={theme}>
        <BrowserRouter>
            <ToastContainer
            hideProgressBar={true}
            ></ToastContainer>
            <Switch>
                <Route exact path="/"
                render={(props)=>{
                    if (jwtToken === "")
                    {
                        return <Redirect to="/signin"></Redirect>
                    }
                    else{
                        return <h1>Homepage</h1>
                    }
                }}>
                </Route>
                <Route path="/signin">
                    <Auth></Auth>
                </Route>
                <Route path="/signup">
                    <Auth></Auth>
                </Route>
               
            </Switch>
        </BrowserRouter>
        </ThemeProvider>
    )
}

export default App;
