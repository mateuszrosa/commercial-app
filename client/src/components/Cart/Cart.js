import {Link} from 'react-router-dom';
import { Icon } from '@iconify/react';
import shoppingCartOutlined from '@iconify-icons/ant-design/shopping-cart-outlined';
import styles from './Cart.module.scss';

const Cart = ({ cart }) => {
    return (
        <Link to="/cart" className={styles.cartIcon}>
            <Icon icon={shoppingCartOutlined} className={styles.cart} width="50px" style={{ transform: "translate(-60%, -50%)" }} />
            <span>{cart}</span>
        </Link>
    );
}

export default Cart;