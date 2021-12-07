import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Homee.css";

export default class Homee extends Component {
    render() {
        return (
            <div className="body-home">
                <nav class="nav">
	<ul class="nav-list1">
		<li class="nav-item1">
			<div class="nav-item-bg1"></div>
			<div class="nav-item-content1">
				<h2 className="player-name"><br/>Jackets</h2>
				<Link to="search/category/chaquetas"><button className="button-player">View Jackets</button></Link>
			</div>
		</li>

		<li class="nav-item1">
			<div class="nav-item-bg1"></div>
			<div class="nav-item-content1">
				<h2 className="player-name"><br/>Sneakers</h2>
				<Link to="search/category/sneakers"><button className="button-player">View Sneakers</button></Link>
			</div>
		</li>

		<li class="nav-item1">
			<div class="nav-item-bg1"></div>
			<div class="nav-item-content1">
				<h2 className="player-name"><br/>T-Shirts</h2>
				<Link to="search/category/camiseta"><button className="button-player">View T-Shirts</button></Link>
			</div>
		</li>

		<li class="nav-item1">
			<div class="nav-item-bg1"></div>
			<div class="nav-item-content1">
				<h2 className="player-name"><br/> Other</h2>
				<Link to="search/category/complementos"><button className="button-player">View Accesories</button></Link>
			</div>
		</li>
	</ul>
</nav>
            </div>
        )
    }
}
