import styles from './Products.module.scss';
import Product from '../../components/Product/Product';
import bike1 from '../../images/trek.png';
import bike2 from '../../images/trek1.png';
import mtb1 from '../../images/mtb1.png';
import mtb2 from '../../images/mtb2.png';

const Products = () => {
    return (
        <div className={styles.products}>
            <Product img={bike1} />
            <Product img={bike2} />
            <Product img={mtb1} />
            <Product img={mtb2} />
        </div>
    );
}

export default Products;