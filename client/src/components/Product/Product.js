import { useRef } from 'react'
import styles from './Product.module.scss';
import { Icon } from '@iconify/react';
import shoppingCartOutlined from '@iconify-icons/ant-design/shopping-cart-outlined';

export const Product = ({ setItems, items, cart, setCart, bike, cartItem }) => {
    const refContainer = useRef(null);

    const addToCart = () => {
        let amount = Number(refContainer.current.value);
        if (refContainer.current.value !== "" && amount >= 1) {

            setItems(items + amount);
            setCart(prevState => {
                return [
                    ...prevState,
                    {
                        ...bike,
                         amount
                    }
                ]
        })
            refContainer.current.value = null;
        }
    }

    const removeFromCart = () => {
        setCart(prevState => prevState.filter(item => item._id !== bike._id));
        setItems(prevState => prevState -= bike.amount);
    };

    return (
        <div className={styles.product}>
            <h3>{bike.name}</h3>
            <img src={bike.img} alt="bike" />
            <div className={styles.productInfo}>
              {!cartItem ?
                <>
                  <h4>{bike.price},-</h4>
                  <p>{bike.description}</p>
                  <div className={styles.adding}>
                      <input ref={refContainer} max={bike.amount} type="number" name="" id="" />
                      <button onClick={addToCart} >
                          <Icon icon={shoppingCartOutlined} width="25px" />
                          Add to cart
                      </button>
                  </div>
                </>  
                  :
                <>
                    <h4>{bike.price},-</h4>
                    <div className={styles.cartItem}>
                        <p>Amount: <span>{bike.amount}</span></p>
                        <button onClick={removeFromCart}>Remove</button>
                    </div>
                </>
              }
            </div>
        </div>
    );
}
