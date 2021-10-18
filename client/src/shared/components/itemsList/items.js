import React from "react";

import Item from "../item/item";



function ItemsList (props) {

    

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