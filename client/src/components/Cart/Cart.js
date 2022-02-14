import { Container, Typography, Button, Grid } from '@material-ui/core';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';

import useStyles from './styles';

export const Cart = ({ cart, handleUpdateCart, handleRemoveFromCart, handleEmptyCart }) => {

    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart, start adding some!
            <Link to="/" className={classes.link}>start adding some</Link>
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map(item => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem 
                            item={item}
                            handleUpdateCart={handleUpdateCart}
                            handleRemoveFromCart={handleRemoveFromCart}
                        />
                    </Grid>
                ))}
                <div className={classes.cardDetails}>
                    <Typography variant="h4">
                        Subtotal: {cart.subtotal.formatted_with_symbol}
                    </Typography>
                    <div>
                        <Button className={classes.emptyButton}
                            size="large"
                            type="button"
                            variant="contained"
                            color="secondary"
                            onClick={handleEmptyCart}
                        >
                            Empty Cart
                        </Button>
                        <Button
                            component={Link}
                            to="/checkout"
                            className={classes.checkoutButton}
                            size="large" type="button"
                            variant="contained"
                            color="primary">
                            Checkout
                        </Button>
                    </div>
                </div>
            </Grid>
        </>
    )

    if (!cart.line_items) {
        return 'Loading...';
    }

    return (
        <Container className={classes.root}>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    );
}