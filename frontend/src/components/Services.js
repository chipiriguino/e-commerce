import React, { Component } from 'react'
import './Services.css';

export default class Services extends Component {
    render() {
        return (
            <div>
                

<section id="services-section">
  <div class="inner-width">
    <h1 class="section-title">Services</h1>
    <div class="border"></div>
    <div class="services-container">
      
      <div class="service-box">
      <img src="images/camion.png" width="210"/>
        <div class="service-title">Envíos</div>
        <div class="service-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.         
        </div>
      </div>
      
      <div class="service-box">
      <img src="images/chat.png" width="210"/>
        <div class="service-title">Contacto</div>
        <div class="service-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.         
        </div>
      </div>
      
      <div class="service-box">
  <img src="images/devoluciones.png" width="210"/>
        
        <div class="service-title">Devoluciones</div>
        <div class="service-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.         
        </div>
      </div>
    </div>    
  </div>
</section>

            </div>
        )
    }
}
