import styles from './Product.module.scss';
const Product = ({ img }) => {
    return (
        <div className={styles.product}>
            <h3>products name</h3>
            <img src={img} />
            <div className={styles.productInfo}>
                <h4>price</h4>
                <p>short info</p>
                <input type="number" name="" id="" />
                <button>Add to cart</button>
            </div>
        </div>
    );
}

export default Product;