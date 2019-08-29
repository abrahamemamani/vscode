//import React, { useState, useEffect } from 'react';
import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from './store';
import Techs from './components/Techs';
import Frontend from './components/Frontend';
import Backend from './components/Backend';

const App = () => {

  // const [techs, setTechs] = useState([]);

  // useEffect(() => {
  //   getTechs();
  // }, []);

  // const getTechs = async () => {
  //   const url = "https://vscode-json-server.herokuapp.com/techs";
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setTechs(data);
  // }

  return (
    <Provider store={ store }>
      <div className="app-wrapper mt-5">
        <div className="container-fluid">
          <Techs />
          <div className="row mt-5">
            <Frontend />
            <Backend />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
