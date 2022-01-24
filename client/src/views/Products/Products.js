import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchBikes} from '../../actions';
import styles from './Products.module.scss';
import {Product} from '../../components/Product/Product';
import {Cart} from '../../components/Cart/Cart';

export const Products = ({ items, setItems, cart, setCart }) => {

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
            {items > 0 && <Cart items={items} />}
            {bikes.map(bike => <Product 
                                    setItems={setItems} 
                                    items={items}
                                    cart={cart}
                                    setCart={setCart}
                                    bike={bike} 
                                    key={bike._id}
                                />)}
        </div>
    );
}