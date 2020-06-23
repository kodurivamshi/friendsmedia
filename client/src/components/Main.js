import React ,{useEffect,useContext} from 'react';
import {Route, Switch,useHistory} from 'react-router-dom';

import Home from './screens/Home';
import Profile from './screens/Profile';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import Navigate from './Navbar';
import Createpost from './screens/Createpost';
import {userContext} from '../App';

const Main=()=>{
    const history=useHistory();
    const {state,dispatch}=useContext(userContext);
    useEffect(()=>{
      const user=JSON.parse(localStorage.getItem("user"))
      if(user){//if user contains token then staying or else not..staying
        dispatch({type:"USER",payload:user});//this dispatch is to change the state of user when the user closes the window without logging out and coming back again..then we have to show him is previous state..
        history.push('/home');  
      }
      else{
        history.push('/signin');
      }
    },[])
    return (
        <div>
        <Navigate />
        <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/home"><Home /></Route>
        <Route path="/signin"><Signin /></Route>
        <Route path="/signup"><Signup /></Route>
        <Route path="/profile"><Profile /></Route>
        <Route path="/create"><Createpost /></Route>
        </Switch>
        </div>
        )
}

export default Main;