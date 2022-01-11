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
            {/* <Product setCart={setCart} cart={cart} img={bike1} />
            <Product setCart={setCart} cart={cart} img={bike2} />
            <Product setCart={setCart} cart={cart} img={mtb1} />
            <Product setCart={setCart} cart={cart} img={mtb2} /> */}
        </div>
    );
}

export default Products;