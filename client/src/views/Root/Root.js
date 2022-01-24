import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Header} from "../../components/Header/Header";
import {Main} from '../Main/Main';
import {Form} from '../Form/Form';
import {Menu} from '../../components/Menu/Menu';
import {Products} from '../Products/Products';
import {Cart} from '../Cart/Cart';
import {Userpage} from '../Userpage/Userpage';
import { Provider } from "react-redux";
import {store} from '../../store';
import './index.css';

export const Root = () => {

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(0);
  const [cart, setCart] = useState([]);

  let hasAccount = true;

  return (
    <Provider store={store}>
    <Router>
      <Header open={open} setOpen={setOpen} />
      <Menu open={open} setClose={setOpen} />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/products">
          <Products items={items} setItems={setItems} cart={cart} setCart={setCart} />
        </Route>
        <Route exact path="/cart">
          <Cart items={items} setItems={setItems} cart={cart} setCart={setCart} />
        </Route>
        <Route exact path="/form">
          <Form cart={cart} />
        </Route>
        <Route exact path="/login">
          <Userpage hasAccount={hasAccount} />
        </Route>
        <Route exact path="/register">
          <Userpage hasAccount={!hasAccount} />
        </Route>
      </Switch>
    </Router>
    </Provider>
  );
}