
import './App.css';
import Home from './screens/Home';
import {  Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup';
import Reset from './screens/Reset';
import Verify from './screens/Verify';
import { Provider } from 'react-redux';
import store from './store';
import Cart from './screens/Cart';
import MyOrder from './screens/Myorders';
import Payment from './components/Payment';
import OrderStatus from './screens/Orderstatus';
import Admin from './screens/Admin';
import Card from './components/Card';
import Health from './screens/Health';
import Individual_health from './screens/Individual_health';
import Group_health from './screens/Group_health';


function App() {
  return (
    <Provider store={store}>
    <Router >
      <div>
         <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/indivi' element={<Individual_health/>}/>
        <Route exact path='/grp' element={<Group_health/>}/>
        <Route exact path='/health' element={<Health/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/reset' element={<Reset/>}/>
        <Route exact path='/verify' element={<Verify/>}/>
        <Route exact path='/myorders' element={<MyOrder/>}/>
        <Route exact path='/pay' element={<Payment/>}/>
        <Route exact path='/orderstatus' element={<OrderStatus/>}/>
        <Route exact path='/admin' element={<Admin/>}/>
        <Route exact path='/cart' element={<Card/>}/>
        </Routes>
        </div>
    </Router> 
    </Provider>
  );
}

export default App;
