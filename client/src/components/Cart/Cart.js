import {Link} from 'react-router-dom';
import { Icon } from '@iconify/react';
import shoppingCartOutlined from '@iconify-icons/ant-design/shopping-cart-outlined';
import styles from './Cart.module.scss';

export const Cart = ({ items }) => {

    return (
        <Link to="/cart" className={styles.cartIcon}>
            <Icon icon={shoppingCartOutlined} className={styles.cart} width="50px" style={{ transform: "translate(-60%, -50%)" }} />
            <span>{items}</span>
        </Link>
    );
}