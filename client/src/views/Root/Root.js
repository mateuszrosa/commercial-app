import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {commerce} from '../../lib/commerce';
import {Header} from "../../components/Header/Header";
import {Main} from '../Main/Main';
import {Menu} from '../../components/Menu/Menu';
import {Products} from '../../components/Products/Products';
import {Cart} from '../../components/Cart/Cart';
import {Userpage} from '../Userpage/Userpage';
import {Checkout} from '../../components/CheckoutForm/Checkout/Checkout';
import { Provider } from "react-redux";
import {store} from '../../store';
import './index.css';

export const Root = () => {

  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const fetchProducts = async () => {
    const {data} = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    console.log('fetchCart');
    setCart(cart);
  }

  const handleAddToCart = async (productId, quantity) => {
    const {cart} = await commerce.cart.add(productId, quantity);
    console.log('handleAddToCart');
    setCart(cart);
  }  

  const handleUpdateToCartQty = async (productId, quantity) => {
    const {cart} = await commerce.cart.update(productId, {quantity});
    console.log('handleUpdateToCartQty');
    setCart(cart);
  }

  const handleRemoveFromCart = async (productId) => {
    const {cart} = await commerce.cart.remove(productId);
    console.log(handleRemoveFromCart)
    setCart(cart);
  }

  const handleEmptyCart = async () => {
    const {cart} = await commerce.cart.empty();
    console.log(handleEmptyCart);
    setCart(cart);
};

const refreshCart = async () => {
  const newCart = await commerce.cart.refresh();
  setCart(newCart);
  console.log('refresh');
}

const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
  try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      console.log('done');
      console.log(incomingOrder);
      setOrder(incomingOrder);

      refreshCart();
  } catch (error) {
      console.log(error);
      setErrorMessage(error.data.error.message);
  }
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
          <Cart 
            cart={cart} 
            setCart={setCart}
            handleUpdateToCartQty={handleUpdateToCartQty}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart} />
        </Route>
        <Route exact path="/login">
          <Userpage hasAccount={hasAccount} />
        </Route>
        <Route exact path="/register">
          <Userpage hasAccount={!hasAccount} />
        </Route>
        <Route exact path="/checkout">
          <Checkout 
            cart={cart} 
            order={order} 
            onCaptureCheckout={handleCaptureCheckout} 
            error={errorMessage}
          />
        </Route>
      </Switch>
    </Router>
    </Provider>
  );
}