import React            from 'react';
import ReactDOM        from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Content from './components/Content';
import Picture              from './components/Picture'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
 
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/"           element={<Home      />}/>

      <Route path="dashboard"         element={<App       />}>
        
        <Route path="amphan"          element={<Content   />}/>
        <Route path="amphan/:pid"     element={<Picture   />}/>
        
        <Route path="amphan2"          element={<Content   />}/>
        <Route path="amphan2/:pid"     element={<Picture   />}/>

        <Route path="amphan3"          element={<Content   />}/>
        <Route path="amphan3/:pid"     element={<Picture   />}/>

        <Route path="amphan4"          element={<Content   />}/>
        <Route path="amphan4/:pid"     element={<Picture   />}/>

      </Route>
      
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


function Home(){
  return(
    <h1>Home Route</h1>
  )
}


