import React from 'react';
import { useSelector } from 'react-redux';
import styles from "./Main.module.scss";
import {Icon} from '@iconify/react';
import bikeIcon from '@iconify-icons/et/bike';

export const Main = () => {

    const { userId} = useSelector(({ user }) => ({
        userId: user.userId
      }));

    return ( 
        <div className={styles.main}>
            <div className={styles.text}>
                {userId ? 
                    <>
                        <h2>You are logged in!</h2> 
                        <p>Enjoy your shopping</p>
                    </>
                    : 
                    <>
                        <h1>Welcome!</h1>
                        <p>We are one of the beast bike shop online</p>
                    </>
                }
            </div>
            <Icon icon={bikeIcon} width="300px" color="#108A7D" />
        </div>
     );
}