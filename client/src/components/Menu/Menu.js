import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import {logout} from '../../actions';
import styles from './Menu.module.scss';
import {Icon} from '@iconify/react';
import closeIcon from '@iconify-icons/ei/close';

export const Menu = ({open, setClose}) => {

    const dispatch = useDispatch();
    const { userId} = useSelector(({ user }) => ({
        userId: user.userId
      }));

    return ( 
        <div className={`${styles.menu} ${open && styles.show}`} >
            <div className={styles.menuLi}>
                <Icon onClick={() => setClose(!open)} icon={closeIcon} width="90px" />
            </div>
            <div className={styles.menuLi}>
                <NavLink onClick={() => setClose(!open)} to="bikes">bikes</NavLink>
            </div>
            <div className={styles.menuLi}>
                <NavLink onClick={() => setClose(!open)} to="helmets">helmets</NavLink>
            </div>
            <div className={styles.menuLi}>
                <NavLink onClick={() => setClose(!open)} to="cart">cart</NavLink>
            </div>
            {
                userId &&
                <div className={styles.menuLi}>
                <NavLink onClick={() => setClose(!open)} to="account">account</NavLink>
                </div>
            }
            <div className={styles.menuLi}>
                {
                    userId ?
                    <NavLink onClick={() => dispatch(logout(userId))} to="/">log Out</NavLink>
                    :
                    <NavLink onClick={() => setClose(!open)} to="login">log in</NavLink>
                }
                
            </div>
        </div>
     );
}