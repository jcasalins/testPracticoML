import React from "react";
import LoaderPAC from "../spinners/loader";
import  { formatPrice, translate } from "../../../utilities/utility";

import _ from 'lodash';

function Product(props) {
    if (props.loading) {
        return <LoaderPAC />
    }
    if (!_.isEmpty(props.viewed)) {
        let ls = (localStorage.getItem('viewed') !== null) ? JSON.parse(localStorage.getItem('viewed')) : [] ;
        if (_.findIndex(ls, ['id', props.viewed.id]) < 0 ) {            
            ls.push(props.viewed);
        }
        localStorage.setItem('viewed', JSON.stringify(ls))
    }

    let price = formatPrice(props.product.price);
    
    return (
        <div className="container product">
            <div className="row product-content">
                <div className="image-product col-12 col-md-8">
                    <img src={props.product.image} alt={props.product.title} />
                </div>
                <div className="info-product col-12 col-md-4">
                    <div className="content-info-product">
                        <p className="label">
                            <span className="tag">{translate(props.product.condition)}</span> <span className="sales">{props.product.sold_quantity !== 0 ? ` - ${props.product.sold_quantity} vendidos` : ''}</span>
                        </p>
                        <h1 className="name-product">{props.product.title} </h1>
                        <p className="price-product">$ {price[0]}<sup>{(!_.isEmpty(price[1]) ? price[1] : '00')}</sup></p>
                        <button type="button" className="btn btn-primary">Comprar</button>
                    </div>
                </div>
                <div className="desc-product col-12">
                    <h2>Descripción del producto</h2>
                    <p>{props.product.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Product;