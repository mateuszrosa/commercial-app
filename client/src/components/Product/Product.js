import { useRef } from 'react'
import styles from './Product.module.scss';
import { Icon } from '@iconify/react';
import shoppingCartOutlined from '@iconify-icons/ant-design/shopping-cart-outlined';

export const Product = ({ setItems, items, cart, setCart, bike, cartItem }) => {

    const refContainer = useRef(null);

    const addToCart = () => {
        const value = Number(refContainer.current.value);
        if (refContainer.current.value !== "" && value >= 1) {
            setItems(items + value);
            setCart(prevState => {
                return [
                    ...prevState,
                    bike
                ]
            })
            refContainer.current.value = null;
        }

    }

    const removeFromCart = () => {
        console.log('remove');
    }

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
                    <div className={styles.adding}>
                        <button onClick={removeFromCart}>Remove</button>
                    </div>
                </>
              }
            </div>
        </div>
    );
}

export default Product;
