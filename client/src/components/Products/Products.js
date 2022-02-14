import {IconButton, Badge} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import {Product} from './Product/Product';

import { Grid } from '@material-ui/core';

import useStyles from './styles';

export const Products = ({ products, onAddToCart, totalItems }) => {

    const classes = useStyles();
    return (
        <main className={classes.content}>
            <IconButton className={classes.button} component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                <Badge badgeContent={totalItems} color="secondary">
                    <ShoppingCart />
                </Badge>
            </IconButton>
            <div className={classes.toolbar} />
            <Grid container justifyContent="center" spacing={4}>
                {products.map(product => (
                    <Grid container justifyContent="center" item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product bike={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;