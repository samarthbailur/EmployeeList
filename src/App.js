import React from 'react';
import LoginPage from './component/LoginPage';
import UserData from './component/UserData';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

function App() {
  return (

    <Router>
      <div className="App">
        <Route exact  path="/" component={LoginPage} /> {/* app = home */}
        <Route  path="/UserData" component={UserData} />
      </div>

     

    </Router>
  );
}

export default App;
