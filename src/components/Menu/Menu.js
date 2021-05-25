import { NavLink } from "react-router-dom";
import styles from './Menu.module.scss';
import {Icon} from '@iconify/react';
import closeIcon from '@iconify-icons/ei/close';

const Menu = ({open, setClose}) => {
    return ( 
        <div className={`${styles.menu} ${open && styles.show}`} >
            <div className={styles.menuLi}>
                <Icon onClick={() => setClose(!open)} icon={closeIcon} width="90px" />
            </div>
            <div className={styles.menuLi}>
                <NavLink onClick={() => setClose(!open)} to="products">products</NavLink>
            </div>
            <div className={styles.menuLi}>
                <NavLink onClick={() => setClose(!open)} to="cart">cart</NavLink>
            </div>
            <div className={styles.menuLi}>
                <NavLink onClick={() => setClose(!open)} to="acount">account</NavLink>
            </div>
            <div className={styles.menuLi}>
                <NavLink onClick={() => setClose(!open)} to="logout">logout</NavLink>
            </div>
        </div>
     );
}

export default Menu;