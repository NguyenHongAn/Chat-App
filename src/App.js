import {BrowserRouter, Route, Switch } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import ReduxAction from './store/actions';
import RealTimeSocket from './realtime';

function App() {
    
    RealTimeSocket.getInstance();
    return (
        <BrowserRouter>
        
            <Switch>
                <Route exact path="/">
                    <h2>Login</h2>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
