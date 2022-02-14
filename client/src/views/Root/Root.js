import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {commerce} from '../../lib/commerce';
import {Header} from "../../components/Header/Header";
import {Main} from '../Main/Main';
import {Menu} from '../../components/Menu/Menu';
import {Products} from '../../components/Products/Products';
import {Cart} from '../../components/Cart/Cart';
import {Userpage} from '../Userpage/Userpage';
import { Provider } from "react-redux";
import {store} from '../../store';
import './index.css';

export const Root = () => {

  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const {data} = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  }

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response.cart);
};



  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

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
          <Products products={products} onAddToCart={handleAddToCart} totalItems={cart.total_items} />
        </Route>
        <Route exact path="/cart">
          <Cart cart={cart} setCart={setCart} handleEmptyCart={handleEmptyCart} />
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