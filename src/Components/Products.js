import React from 'react';
import ahproducts from './../ahproducts.json';
import { Link } from 'react-router-dom';

import styles from './ProductsStyles.module.css';

function Products() {

    return(
        <div>
            <h1 className={styles.heading}>Welcome to Product Page</h1>

            <section className={styles.productscontainer}>
                {Object.keys(ahproducts).map(keyName=>{
                    const ahproduct = ahproducts[keyName];
                    return(
                        <Link className={styles.products} key={keyName}
                        to={`/products/${keyName}`} >
                            <img src={ahproduct.img} width="75%"/>
                            <h2 className={styles.productname} >{ahproduct.name}</h2>                            
                        </Link>
                    );
                })}
            </section>
        </div>
    );
}

export default Products;