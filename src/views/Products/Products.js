import styles from './Products.module.scss';
import Product from '../../components/Product/Product';
import bike1 from '../../images/trek.png';
import bike2 from '../../images/trek1.png';
import mtb1 from '../../images/mtb1.png';
import mtb2 from '../../images/mtb2.png';
import Cart from '../../components/Cart/Cart';

const Products = ({ cart, setCart }) => {
    return (
        <div className={styles.products}>
            {cart > 0 && <Cart cart={cart} />}
            <Product setCart={setCart} cart={cart} img={bike1} />
            <Product setCart={setCart} cart={cart} img={bike2} />
            <Product setCart={setCart} cart={cart} img={mtb1} />
            <Product setCart={setCart} cart={cart} img={mtb2} />
        </div>
    );
}

export default Products;