import React from 'react';
import logo1 from './images/image01.jpg';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Home() {

    return (
        <div>
            <img src={logo1} class="d-block w-100" alt="Azmul Haramain Banner" />            
        </div>
    );
}

export default Home;