import styles from './Userpage.module.scss';

const Userpage = () => {
    return ( 
        <div className={styles.userpage}>
            <h2>log in</h2>
            <form action="">
                <input type="text"/>
                <input type="password" name="" id=""/>
                <input type="submit" value="log in" />
            </form>
        </div>
     );
}
 
export default Userpage;