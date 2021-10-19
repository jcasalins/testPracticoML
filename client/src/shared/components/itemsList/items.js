import React from "react";
import NotFound from "../../components/notFound/notFound";

import Item from "../item/item";
import LoaderPAC from "../spinners/loader";

import _ from 'lodash';

function ItemsList (props) {

    if (props.loading) {
        return <LoaderPAC />
    }

    if (_.isEmpty(props.products)) {
        return <NotFound />
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