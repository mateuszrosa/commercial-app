import { useRef } from 'react'
import styles from './Product.module.scss';
import { Icon } from '@iconify/react';
import shoppingCartOutlined from '@iconify-icons/ant-design/shopping-cart-outlined';

const Product = ({ setCart, cart, img, bike }) => {

    const refContainer = useRef(null);

    const addToCart = () => {
        const value = Number(refContainer.current.value);
        if (refContainer.current.value !== "" && value >= 1) {
            console.log(refContainer.current.value);
            setCart(cart + value);
            refContainer.current.value = null;
        }
    }
    return (
        <div className={styles.product}>
            <h3>{bike.name}</h3>
            <img src={bike.img} alt="bike" />
            <div className={styles.productInfo}>
                <h4>{bike.price},-</h4>
                <p>{bike.description}</p>
                <div className={styles.adding}>
                    <input ref={refContainer} type="number" name="" id="" />
                    <button onClick={addToCart} >
                        <Icon icon={shoppingCartOutlined} width="25px" />
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Product;
