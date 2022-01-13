import {useSelector} from 'react-redux';
import styles from './Products.module.scss';
import Product from '../../components/Product/Product';
import Cart from '../../components/Cart/Cart';

const Products = ({ cart, setCart }) => {

    const { bikes = [] } =
    useSelector(({ bikes }) => ({
      bikes
    }));

    return (
        <div className={styles.products}>
            {cart > 0 && <Cart cart={cart} />}
            {bikes.map(bike => <Product setCart={setCart} cart={cart} bike={bike} key={bike.id}/>)}
        </div>
    );
}

export default Products;