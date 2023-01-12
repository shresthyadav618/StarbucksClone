import React from 'react';
// import { Counter } from './features/counter/Counter';
// import Header from "./Header"
import './App.css';
import {Routes, Route, Link ,BrowserRouter as Router} from "react-router-dom"
import { Homescreen } from './screens/Homescreen';
import { Header } from './Header';
import { Fade }from "react-awesome-reveal"
// import { Menu } from './Menu';
// import { R } from './Menu';
import { Menu } from './routes/Menu';

import { Footer } from './screens/Footer';
import Rewards from './routes/Rewards';
import Gift from './routes/Gift';
import Signup from './routes/Signup';
import Signin from './routes/Signin';
import StoreLocator from './routes/Store-Locator';

function App() {
  return (
    <div className="App">
      
      <Router>
     <Routes>
      
      <Route exact path="/" element={<Header/>}></Route>
      <Route exact path="/menu" element={<Menu/>}></Route>
      <Route exact path="/rewards" element={<Rewards/>}></Route>
      <Route exact path="/gift" element={<Gift/>}></Route>
      <Route exact path="/store-locator" element={<StoreLocator/>}></Route>
      <Route exact path="/account/create" element={<Signup/>}></Route>
      <Route exact path="/account/signin" element={<Signin/>}></Route>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
