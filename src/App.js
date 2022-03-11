import './App.css';
import Home from './Home.js'
import Cart from './Cart'
import Placeorder from './Placeorder';
import {BrowserRouter as Router,Route,Routes,Navigate} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="*" element={<Home />} /> 
      <Route path="/cart" exactMatch element = {<Cart />}/>
      <Route path="/place_order" element = {<Placeorder />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
