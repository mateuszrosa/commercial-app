import {IconButton, Badge} from '@material-ui/core';
import { ShoppingCart, KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import {Product} from './Product/Product';

import { Grid } from '@material-ui/core';

import useStyles from './styles';

export const Products = ({ products, setProducts, onAddToCart, totalItems }) => {

    const classes = useStyles();

    const compareValues = (order = 'asc') => {
        return function innersortTable(a, b) {
            if (typeof a.price.formatted === "undefined") {
                return 1;
            }

            if (order === 'asc') {
                return a.price.formatted - b.price.formatted
            } else {
                return b.price.formatted - a.price.formatted
            }
        }
    }

    const sort = (direct) => {
       let arr = [...products];
       arr = arr.sort(compareValues(direct));
       setProducts(arr);
    }

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}>
                <div className={classes.buttons}>
                    <div className={classes.sortBtns}>
                        <IconButton className={classes.sort} onClick={()=>sort('asc')}>
                            <Badge color="secondary">
                                <KeyboardArrowUp />
                            </Badge>
                        </IconButton>
                        <IconButton className={classes.sort} onClick={()=>sort('dsc')}>
                            <Badge color="secondary">
                                <KeyboardArrowDown />
                            </Badge>
                        </IconButton>
                    </div>
                    <IconButton className={classes.button} component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </div>
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