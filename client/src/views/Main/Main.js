import React from 'react';
import styles from "./Main.module.scss";
import {Icon} from '@iconify/react';
import bikeIcon from '@iconify-icons/et/bike';

export const Main = () => {

    return ( 
        <div className={styles.main}>
            <div className={styles.text}>
                        <h1>Welcome!</h1>
                        <p>We are one of the best bike shop online</p>
            </div>
            <Icon icon={bikeIcon} width="300px" color="#108A7D" />
        </div>
     );
}