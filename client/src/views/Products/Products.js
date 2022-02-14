import {Product} from '../../components/Product/Product';
import {Cart} from '../../components/Cart/Cart';

import { Grid } from '@material-ui/core';

import useStyles from './styles';

export const Products = ({ products, onAddToCart }) => {

    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justifyContent="center" spacing={4}>
                {products.map(product => (
                    <Grid container justifyContent="center" item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product bike={product} onAddToCart={() => onAddToCart(product.id)} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;