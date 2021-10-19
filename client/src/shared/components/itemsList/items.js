import React from "react";

import Item from "../item/item";
import LoaderPAC from "../spinners/loader";



function ItemsList (props) {

    if (props.loading) {
        return <LoaderPAC />
    }

    let products = props.products.map((product) => {
        return <Item key={product.id} product={product} />;
      });

    return (
        <div className="container items">
            {products}
        </div>
    )
}

export default ItemsList;