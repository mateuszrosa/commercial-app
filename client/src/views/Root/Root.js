import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {commerce} from '../../lib/commerce';
import {Header} from "../../components/Header/Header";
import {Main} from '../Main/Main';
import {Register} from '../Userpage/Register';
import {Login} from '../Userpage/Login';
import {Menu} from '../../components/Menu/Menu';
import {Products} from '../../components/Products/Products';
import {Cart} from '../../components/Cart/Cart';
import {Checkout} from '../../components/CheckoutForm/Checkout/Checkout';
import { Provider } from "react-redux";
import {store} from '../../store';
import './index.css';

export const Root = () => {

  const hasAccount = true;

  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [bikes, setBikes] = useState([]);
  const [helmets, setHelmets] = useState([]);
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchBikes = async () => {
    const {data} = await commerce.products.list({
      category_slug: ['bikes']
    });
    setBikes(data);
  }

  const fetchHelmets = async () => {
    const {data} = await commerce.products.list({
      category_slug: ['helmets']
    });
    setHelmets(data);
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  }

  const handleAddToCart = async (productId, quantity) => {
    const {cart} = await commerce.cart.add(productId, quantity);
    setCart(cart);
  }  

  const handleUpdateToCartQty = async (productId, quantity) => {
    const {cart} = await commerce.cart.update(productId, {quantity});
    setCart(cart);
  }

  const handleRemoveFromCart = async (productId) => {
    const {cart} = await commerce.cart.remove(productId);
    setCart(cart);
  }

  const handleEmptyCart = async () => {
    const {cart} = await commerce.cart.empty();
    setCart(cart);
};

const refreshCart = async () => {
  const newCart = await commerce.cart.refresh();
  setCart(newCart);
}

const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
  try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
      setOrder(incomingOrder);
      refreshCart();
  } catch (error) {
      console.log(error);
      setErrorMessage(error.data.error.message);
  }
};

  useEffect(() => {
    fetchBikes();
    fetchHelmets();
    fetchCart();
  }, []);

  return (
    <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <Header open={open} setOpen={setOpen} />
      <Menu open={open} setClose={setOpen} />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/bikes">
          <Products products={bikes} setProducts={setBikes} onAddToCart={handleAddToCart} totalItems={cart.total_items} />
        </Route>
        <Route exact path="/helmets">
          <Products products={helmets} setProducts={setHelmets} onAddToCart={handleAddToCart} totalItems={cart.total_items} />
        </Route>
        <Route exact path="/cart">
          <Cart 
            cart={cart} 
            setCart={setCart}
            handleUpdateToCartQty={handleUpdateToCartQty}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart} />
        </Route>
        <Route exact path="/checkout">
          <Checkout 
            cart={cart} 
            order={order} 
            onCaptureCheckout={handleCaptureCheckout} 
            error={errorMessage}
          />
        </Route>
        <Route exact path="/login">
          <Login hasAccount={hasAccount} />
        </Route>
        <Route exact path="/register">
          <Register hasAccount={!hasAccount} />
        </Route>
      </Switch>
    </Router>
    </Provider>
  );
}