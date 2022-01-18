import styles from './Cart.module.scss';
import {Product} from '../../components/Product/Product';

const Cart = ({cart,setCart,items,setItems}) => {

    let sum = 0;

    const clearCart = () => {
        setCart([]);
        setItems(0);
    }

    return ( 
        <div className={styles.cart}>
            <h1>Your cart</h1>
            {cart.map(item => <Product bike={item} key={item._id} cartItem/>)}
            <div className={styles.summary}>
               {cart.forEach(item => sum += item.price)}
               Your order is: {sum}$
               <div className={styles.buttons}>
                    <button onClick={clearCart}>Empty Cart</button>
                    <button>Checkout</button>
               </div>
            </div>
        </div>
     );
}
 
export default Cart;