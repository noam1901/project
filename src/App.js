import './App.css';
import Nav2 from './ToolsComponents/Nav2';
import Login from './MainComponents/Login';
import Footer from './ToolsComponents/Footer';
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

function App() {
  return (
    <Router>
      <div className="App">
        <Nav2></Nav2>
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
          </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
