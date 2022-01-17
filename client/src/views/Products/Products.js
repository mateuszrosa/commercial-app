import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchBikes} from '../../actions';
import styles from './Products.module.scss';
import Product from '../../components/Product/Product';
import Cart from '../../components/Cart/Cart';

const Products = ({ cart, setCart }) => {

    const dispatch = useDispatch();

    const { bikes = [] } =
    useSelector(({ bikes }) => ({
      bikes
    }));

    useEffect(() => {
        dispatch(fetchBikes())
    },[])

    return (
        <div className={styles.products}>
            {cart > 0 && <Cart cart={cart} />}
            {bikes.map(bike => <Product setCart={setCart} cart={cart} bike={bike} key={bike.id}/>)}
        </div>
    );
}

export default Products;