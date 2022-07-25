
import './App.css';
import Nav2 from './ToolsComponents/Nav2';
import Login from './MainComponents/Login';
import Footer from './ToolsComponents/Footer';
import Register from './MainComponents/Register';
import HomePage from './MainComponents/HomePage';
import SingleProduct from './MainComponents/SingleProduct';
import { ForgotPassword } from './MainComponents/ForgotPassword';

function App() {
  return (
    <div className="App">
      <Nav2></Nav2>
      <div className='main-content'>
        {/* <ForgotPassword></ForgotPassword> */}
        {/* <SingleProduct></SingleProduct> */}
        {/* <Login></Login> */}
        <Register></Register>
      </div>
      {/* <HomePage></HomePage> */}
      
      <Footer></Footer>
    </div>
  );
}

export default App;
