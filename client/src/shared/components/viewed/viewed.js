import React from "react";
import { Link } from "react-router-dom";

import './viewed.scss';

function Viewed(props) {
    return (
        <div className="col">
            <div class="card">
                <Link to={`/items/${props.product.id}`} >
                    <img src={props.product.image} class="card-img-top jMinH" alt={props.product.title} />
                </Link> 
                <div class="card-body">
                    <p class="card-text">
                        <Link to={`/items/${props.product.id}`} >{props.product.title} </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Viewed;