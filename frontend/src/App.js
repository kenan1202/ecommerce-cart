import Navbar from "./components/Navbar";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';




function App() {
  return (
    <div className = 'App'>
      <Router>
        <Navbar></Navbar>
        <Route path = '/' exact component = {HomeScreen}></Route>
        <Route path = '/product/:id' component = {ProductScreen}></Route>
        <Route path = '/cart' component = {CartScreen}></Route>
      </Router>
    </div>
  );
}

export default App;
