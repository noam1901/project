import './App.css';
import Nav2 from './ToolsComponents/Nav2';
import Login from './MainComponents/Login';
import Footer from './ToolsComponents/Footer';
import Register from './MainComponents/Register';
import HomePage from './MainComponents/HomePage';
import SingleProduct from './MainComponents/SingleProduct';
import { ForgotPassword } from './MainComponents/ForgotPassword';
import Cart from './MainComponents/Cart';

function App() {
  return (
    <div className="App">
      <Nav2></Nav2>
      {/* <ForgotPassword></ForgotPassword> checked */}
      {/* <SingleProduct></SingleProduct> checked */}
      {/* <Login></Login> checked */}
      {/* <Register></Register> checked*/}
      {/* <HomePage></HomePage> some work needed */}
      {/* <Cart></Cart> should remake*/}
      <Footer></Footer>
    </div>
  );
}

export default App;
