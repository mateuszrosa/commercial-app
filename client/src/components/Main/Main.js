import React from 'react';
import styles from "./Main.module.scss";
import {Icon} from '@iconify/react';
import bikeIcon from '@iconify-icons/et/bike';

const Main = () => {
    return ( 
        <div className={styles.main}>
            <div className={styles.text}>
                <h1>Welcome!</h1>
                <p>We are one of the beast bike shop online</p>
            </div>
            <Icon icon={bikeIcon} width="300px" color="#108A7D" />
        </div>
     );
}
 
export default Main;