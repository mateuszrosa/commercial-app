import { useRef } from 'react'
import styles from './Product.module.scss';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { Icon } from '@iconify/react';
import shoppingCartOutlined from '@iconify-icons/ant-design/shopping-cart-outlined';

import useStyles from './styles';

export const Product = ({ setItems, items, cart, setCart, bike, cartItem }) => {
    const refContainer = useRef(null);
    const classes = useStyles();

    const addToCart = () => {
        let amount = Number(refContainer.current.value);
        if (refContainer.current.value !== "" && amount >= 1) {

            setItems(items + amount);
            setCart(prevState => {
                return [
                    ...prevState,
                    {
                        ...bike,
                         amount
                    }
                ]
        })
            refContainer.current.value = null;
        }
    }

    const removeFromCart = () => {
        setCart(prevState => prevState.filter(item => item._id !== bike._id));
        setItems(prevState => prevState -= bike.amount);
    };

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={bike.media.source} title={bike.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {bike.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        ${bike.price.formatted}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: bike.description }} variant="body2" color="textSecondary" component="p" />
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" onClick={addToCart}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    );
};

    // return (
    //     <div className={styles.bike}>
    //         <h3>{bike.name}</h3>
    //         <img src={bike.image.url} alt={bike.image.filename} />
    //         <div className={styles.bikeInfo}>
    //             {bike.price.formatted_with_code}
    //             <p dangerouslySetInnerHTML={{__html: bike.description}} />
    //             <div className={styles.adding}>
    //                   <input ref={refContainer} max={bike.inventory.available} type="number" name="" id="" />
    //                   <button onClick={addToCart} >
    //                       <Icon icon={shoppingCartOutlined} width="25px" />
    //                       Add to cart
    //                   </button>
    //               </div>
    //         </div>
    //         <h3>{bike.name}</h3>
    //         <img src={bike.img} alt="bike" />
    //         <div className={styles.bikeInfo}>
    //           {!cartItem ?
    //             <>
    //               <h4>{bike.price},-</h4>
    //               <p>{bike.description}</p>
    //               <div className={styles.adding}>
    //                   <input ref={refContainer} max={bike.amount} type="number" name="" id="" />
    //                   <button onClick={addToCart} >
    //                       <Icon icon={shoppingCartOutlined} width="25px" />
    //                       Add to cart
    //                   </button>
    //               </div>
    //             </>  
    //               :
    //             <>
    //                 <h4>{bike.price},-</h4>
    //                 <div className={styles.cartItem}>
    //                     <p>Amount: <span>{bike.amount}</span></p>
    //                     <button onClick={removeFromCart}>Remove</button>
    //                 </div>
    //             </>
    //           }
    //         </div>
    //     </div>
    // );
// }
