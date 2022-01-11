import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../../components/Header/Header";
import Main from '../../components/Main/Main';
import Menu from '../../components/Menu/Menu';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import './index.css';

function App() {

  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState(0);

  return (
    <Router>
      <Header open={open} setOpen={setOpen} />
      <Menu open={open} setClose={setOpen} />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/products">
          <Products cart={cart} setCart={setCart} />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
