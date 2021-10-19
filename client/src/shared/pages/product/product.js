import React, { Component } from "react";
import Search from "../../components/search/search";
import Breadcrumbs from "../../components/Breadcrumbs/breadcrumbs";
import Product from "../../components/product/product";

import _ from 'lodash';


import "./product.scss";

class ProductPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: {},
            loading: false
        };
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.getProduct(id);
    }
    getProduct(id){
        this.setState({ product: {}, loading: true });
        this.reqGetProduct(id)
            .then(res => {
                res.description = this.description(res.description);
                this.setState({
                    product: res,
                    loading: false
                })
            })

    }
    async reqGetProduct(id) {
        return await fetch(`/api/items/${id}`)
                .then(res => res.json())
                .catch(err => console.log(err));
    }

    description(desc) {
        desc = desc.split('\n').map((el, key) => {
            return (_.isString(el) ? !!_.trim(el) : _.isEmpty(el)) ? <span key={key}>{el}<br /></span> : <br key={key} />;
        }) 
        return desc;
    }

    render() {
        return (
            <main>
                <Search history={this.props.history}/>
                <Breadcrumbs categories={this.state.product.categories} />
                <Product 
                    product={this.state.product}
                    loading={this.state.loading}
                />
            </main>
        )
    }
}

export default ProductPage; 