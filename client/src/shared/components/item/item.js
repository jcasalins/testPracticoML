import React from "react";
import { Link } from "react-router-dom";

function Item (props) {
    return (
        <div className="row item">
            <div className="col-12 col-sm-3 col-md-3 image-item">
                <Link to={`/items/${props.product.id}`}>
                    <img src={props.product.thumbnail} alt={props.product.title} />
                </Link>
            </div>
            <div className="col-12 col-sm-6 col-md-7 detail-item">
                <p className="price-item">
                    <Link to={`/items/${props.product.id}`}>
                        $ {props.product.price}
                    </Link>
                </p>
                <p className="descrip-item">
                    <Link to={`/items/${props.product.id}`}>
                        {props.product.title}
                    </Link>
                </p>
            </div>
            <div className="col-12 col-sm-3 col-md-2 state-item">
                <p className="city">{props.product.address.state_name}</p>
            </div> 
        </div>
    )
}

export default Item;