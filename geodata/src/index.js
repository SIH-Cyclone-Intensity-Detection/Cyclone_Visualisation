import React            from 'react';
import ReactDOM        from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App        from './App';
import Home       from './components/Home'
import Picture    from './components/Picture'
import Register   from './components/Register'
import Login      from './components/Login'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
 
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/"                 element={<Home      />}/>
      <Route path="/register"         element={<Register  />}/>
      <Route path="/login"            element={<Login  />}/>

      <Route path="dashboard"         element={<App       />}>
        <Route path="Fani/:pid"     element={<Picture   />}/>
        
        <Route path="Amphan/:pid"     element={<Picture   />}/>

        <Route path="Nisarg/:pid"     element={<Picture   />}/>

        <Route path="Tauktae/:pid"     element={<Picture   />}/>

      </Route>
      
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





