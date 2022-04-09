import './App.css';
import Header from './conponents/header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './conponents/home/Home';
import Product from './conponents/product/Product';
import Order from './conponents/order/Order';
import Singup from './conponents/singup/Singup';
import Rebiews from './conponents/reviews/Rebiews';
import RequireAuth from './conponents/riquereAuth/RiquereAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/order' element={<RequireAuth><Order/></RequireAuth>}/>
        <Route path='/singup' element={<Singup/>}/>
        <Route path='/reviews' element={<Rebiews/>}/>
      </Routes>
    </div>
  );
}

export default App;
