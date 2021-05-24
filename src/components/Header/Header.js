
import "./Header.module.scss";
import {Icon} from '@iconify/react';
import menuIcon from '@iconify-icons/dashicons/menu';



const Header = () => {
    return ( 
        <header>
            <h1>biker shop</h1>
            <Icon icon={menuIcon} width="75px"/>
        </header>
     );
}
 
export default Header;