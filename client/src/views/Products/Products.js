import {useState, useEffect} from 'react';
import {commerce} from '../../lib/commerce';
import styles from './Products.module.scss';
import {Product} from '../../components/Product/Product';
import {Cart} from '../../components/Cart/Cart';

export const Products = ({ items, setItems, cart, setCart }) => {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const {data} = await commerce.products.list();    
        setProducts(data);
      }

    useEffect(() => {
        fetchProducts();
    },[])

    return (
        <div className={styles.products}>
            {/* {items > 0 && <Cart items={items} />} */}
            {products.map(bike => <Product 
                                    setItems={setItems} 
                                    items={items}
                                    cart={cart}
                                    setCart={setCart}
                                    bike={bike} 
                                    key={bike.id}
                                />)}
        </div>
    );
}