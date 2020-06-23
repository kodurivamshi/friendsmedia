import React, {createContext,useReducer} from 'react'; 
import Main from './components/Main';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {initialState,reducer} from './reducers/users';

export const userContext=createContext();


function App() {

  const [state,dispatch]=useReducer(reducer,initialState);
  return (
    <userContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    <Main />
    </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
