import styles from './Menu.module.scss';
import {Icon} from '@iconify/react';
import closeIcon from '@iconify-icons/ei/close';

const Menu = () => {
    return ( 
        <div className={styles.menu}>
            <div className={styles.menuLi}>
                <Icon icon={closeIcon} width="90px" />
            </div>
            <div className={styles.menuLi}>products</div>
            <div className={styles.menuLi}>cart</div>
            <div className={styles.menuLi}>account</div>
            <div className={styles.menuLi}>logout</div>
        </div>
     );
}

export default Menu;