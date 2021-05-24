
import "./Header.module.scss";
import {Icon} from '@iconify/react';
import menuIcon from '@iconify-icons/dashicons/menu';



const Header = () => {

    const click = (e) => {
        console.log(e.target)
    }

    return ( 
        <header>
            <h1>biker shop</h1>
            <Icon icon={menuIcon} width="75px" onClick={click} />
        </header>
     );
}
 
export default Header;