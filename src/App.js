import React from 'react';
import { Route, Switch } from "react-router-dom";
import Books from './components/Books';
import Home from './components/Home';
import Clothes from './components/Clothes';
import Electronics from './components/Electronics';
import HomeDecor from './components/HomeDecor';
import Coupons from './components/Coupons';
import MiniTv from './components/MiniTv';
import YourCart from './components/YourCart';
import Profile from './components/Profile';
import AboutUs from './components/AboutUs';
import Careers from './components/Careers';
function App() {
  return (

    <div className="App">

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/All' component={Home} />
        <Route exact path='/minitv' component={MiniTv} />
        <Route exact path='/clothes' component={Clothes} />
        <Route exact path="/books" component={Books} />
        <Route exact path='/electronics' component={Electronics} />
        <Route exact path='/homedecor' component={HomeDecor} />
        <Route exact path='/coupons' component={Coupons} />
        <Route exact path='/yourcart' component={YourCart}></Route>
        <Route exact path='/profile' component={Profile}></Route>
        <Route exact path='/aboutus' component={AboutUs}></Route>
        <Route exact path='/careers' component={Careers}></Route>
      </Switch>

    </div>

  );
}

export default App;
