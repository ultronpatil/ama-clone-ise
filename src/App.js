import React from 'react';
import { Route, Switch } from "react-router-dom";
import Books from './components/Books';
import Home from './components/Home';
import Clothes from './components/Clothes';
import Electronics from './components/Electronics';
import HomeDecor from './components/HomeDecor';
import Coupons from './components/Coupons';
import MiniTv from './components/MiniTv';

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
      </Switch>

    </div>

  );
}

export default App;
