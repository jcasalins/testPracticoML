import React, { Component } from "react";
import Search from "../../components/search/search";
import Breadcrumbs from "../../components/Breadcrumbs/breadcrumbs";

import _ from 'lodash';



class ProductPage extends Component {
    constructor(props) {
        super(props);

        let initProduct = [];


        this.state = {
            product: initProduct,
            loading: false
        };
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.getProduct(id);
    }
    getProduct(id){
        this.reqGetProduct(id)
            .then(res => {
                res.description = this.description(res.description);
                console.log(res.categories);
                this.setState({
                    product: res
                })
            })

    }
    reqGetProduct(id) {
        return fetch(`/api/items/${id}`)
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
        console.log('render');
        console.log(this.state.product);
        return (
            <main>
                <Search history={this.props.history}/>
                <Breadcrumbs categories={this.state.product.categories} />
                <div className="container product">
                    <div className="row product-content">
                        <div className="image-product col-auto">
                            <img src={this.state.product.image} alt={this.state.product.title} />
                        </div>
                        <div className="info-product col-auto">
                            <div className="content-info-product">
                                <p className="label">
                                    <span className="tag">{this.state.product.condition}</span> - <span className="sales">234 Vendidos</span>
                                </p>
                                <h1 className="name-product">{this.state.product.title} </h1>
                                <p className="price-product">$ {this.state.product.price}<sup>00</sup></p>
                                <button type="button" className="btn btn-primary">Comprar</button>
                            </div>
                        </div>
                        <div className="desc-product col-auto">
                            <h2>Descripción del producto</h2>
                            <p>{this.state.product.description}</p>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default ProductPage; 