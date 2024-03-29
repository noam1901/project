import './App.css';
import Nav2 from './SeconderyComponents/Nav2';
import Login from './MainComponents/Login';
import Footer from './SeconderyComponents/Footer';
import Register from './MainComponents/Register';
import HomePage from './MainComponents/HomePage';
import SingleProduct from './MainComponents/SingleProduct';
import { ForgotPassword } from './MainComponents/ForgotPassword';
import Cart from './MainComponents/Cart';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Products from './MainComponents/Products';
import MyAccount from './MainComponents/MyAccount';
import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <Router>
      <div className="App">
        <Nav2 loggedIn={loggedIn} setLoggedIn={setLoggedIn}></Nav2>
          <Switch>
            <Route exact path='/'>
              <HomePage></HomePage>
            </Route>
            <Route path='/Cart'>
              <Cart></Cart>
            </Route>
            <Route path='/SingleProduct/:id'>
              <SingleProduct></SingleProduct>
            </Route>
            <Route path='/Register'>
              <Register></Register>
            </Route>
            <Route path='/Login'>
              <Login></Login>
            </Route>
            <Route path='/products'>
              <Products></Products>
            </Route>
            <Route path='/MyAccount/:id'>
              <MyAccount></MyAccount>
              {/* change the use of id with cookies */}
            </Route>
          </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
