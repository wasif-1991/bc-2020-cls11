import React from 'react';
import { Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from './NavBar.module.css'

function NavBar() {

    return (
        <div>
            <nav className={styles.navstyling}>
                <h2 className={styles.navheading, styles.navheadingmobile}>Azmul Haramain</h2>
                <section className={styles.navmenu}>
                    <section className={styles.navmenumobile}>
                        <ul class="nav justify-content-end">
                            <li class="nav-item">
                                <Link class="nav-link active" to="/"> Home </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about"> About Us </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/products"> Products </Link>
                            </li>
                        </ul>
                    </section>
                </section>                
            </nav>
        </div>
    );
}

export default NavBar;