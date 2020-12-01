import React from 'react';
import { useParams } from 'react-router-dom';
import ahproducts from '../ahproducts.json';
import styles from './ProductsStyles.module.css';

function ProductItems() {

    const { id } = useParams();
    const ahp = ahproducts[id];
    
    if (!ahp)
        return <h3>Product Not Found!</h3>
    
    return(
        <div>
            <h1 className={styles.heading}>Welcome to Product Item Page.</h1>
            <div className={styles.singleproduct}>                
                <h2 className={styles.producthead}>{ahp.name}</h2>
                <img src={ahp.img} className={styles.productimg} />
            </div>
        </div>
    );
}

export default ProductItems;