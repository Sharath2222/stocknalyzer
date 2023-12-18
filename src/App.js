import logo from './logo.svg';
import './App.css';
import Register from './Components/Authentication/Register';
import Login from './Components/Authentication/Login';
import PrivateRoute from './Components/Authentication/PrivateRoute';
import { Router,Route } from 'express';



function App() {
  return (
    <div className="App">
      <Router>
   
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        
     
    </Router>
    </div>
  );
}

export default App;