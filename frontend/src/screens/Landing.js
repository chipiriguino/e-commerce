import React from 'react';
import Homee from '../components/Homee';
import Services from '../components/Services';
import Zapas from '../components/Zapas';


export default function Landing() {
    return (
        <div>
            <Homee />
            <Services/>
            <h1 className="marcas-title">Marcas</h1>
            <div class="border"></div>
        <div className="marcas-align"><img class="marcas" src="/images/marcas.png"/> <img class="marcas" src="/images/marcass.jpeg"/></div>
        <Zapas/>
            {/* <ul className="cubos">
            <div id="content-item">
			<div class="col-md-4">
				<div class="item">
                <a href="/search/category/sneakers">
                    <img src="/images/zapatos.jpeg" alt="logo turquesa" width="250" height="350"  /></a>
                    </div>
                  </div>
                  <h3 className="ropa-title">Sneakers</h3>
                  </div>
            <div id="content-item">
			<div class="col-md-4">
				<div class="item">
                <a href="/search/category/chaquetones">
                    <img  src="/images/chaqueta.jpeg" alt="logo granate" width="250" height="350" /> 
                        </a>
                    </div>
                  </div>
                  <h3 className="ropa-title">Chaquetones</h3>
                  </div>


                  <div id="content-item">
			<div class="col-md-4">
				<div class="item">
                <a href="search/category/camiseta">
                    <img  src="/images/camiseta.jpeg" alt="logo naranja" width="250" height="350" /></a>
                    </div>
                  </div>
                  <h3 className="ropa-title">Camisetas</h3>
                  </div>

                    <div id="content-item">
			<div class="col-md-4">
				<div class="item">
                <a href="search/category/chaquetas">
                    <img  src="/images/chaq.jpeg" alt="logo amarillo" width="250" height="350" /></a>
                    </div>
                  </div>
                  <h3 className="ropa-title">Chaquetas</h3>
                  </div>
                  <div id="content-item">
			<div class="col-md-4">
				<div class="item">
                <a href="search/category/complementos">
                    <img  src="/images/gorra.jpeg" alt="logo amarillo" width="250" height="350" /></a>
                    </div>
                  </div>
                  <h3 className="ropa-title">Complementos</h3>
                  </div>
            </ul> */}

            {/* <nav className="media">
                <a href="https://www.instagram.com/weareelcubo/">Instagram</a>
                <a href="https://www.facebook.com/El-CUBO-106282604108753">Facebook</a>
                <a href="https://twitter.com/weareelcubo">Twitter</a>
                <a href="">Whatsap</a>
                <a href="">We Chat</a>
                <a href="https://codepen.io/chipiriguino/pen/YzwwxxJ?editors=1010">E-mail</a>
            </nav> */}
        </div>
    )
}
