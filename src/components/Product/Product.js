import { useRef } from 'react'
import styles from './Product.module.scss';
import { Icon } from '@iconify/react';
import shoppingCartOutlined from '@iconify-icons/ant-design/shopping-cart-outlined';

const Product = ({ setCart, cart, img }) => {

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
            <h3>products name</h3>
            <img src={img} alt="bike" />
            <div className={styles.productInfo}>
                <h4>price</h4>
                <p>short info</p>
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
