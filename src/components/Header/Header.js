
import { NavLink } from "react-router-dom";
import "./Header.module.scss";
import {Icon} from '@iconify/react';
import menuIcon from '@iconify-icons/dashicons/menu';



const Header = ({open, setOpen}) => {
    return ( 
        <header>
            <NavLink to="/">biker shop</NavLink>
            <Icon icon={menuIcon} width="75px" onClick={() => setOpen(!open)} />
        </header>
     );
}
 
export default Header;