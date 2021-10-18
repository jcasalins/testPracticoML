import React, { Component } from "react";
import Search from "../../components/search/search";
import ItemsList from "../../components/itemsList/items";

import _ from "lodash";

import { parse } from "qs";
import Breadcrumbs from "../../components/Breadcrumbs/breadcrumbs";

class SearchPage extends Component {
    constructor (props) {
        super(props);

        let initProduct = [];
        let initCategories = [];
        
        this.state = {
            products : initProduct,
            categories: initCategories,
            search: ''

        }
    }
    componentDidMount () {
        const query = parse(this.props.location.search, { ignoreQueryPrefix: true })
        this.getProducts(query.search);
    }

    componentDidUpdate(prevProps) {

        if (!_.isEmpty(this.props.location.search)
            && !_.isEmpty(prevProps.location.search)
            && prevProps.location.search !== this.props.location.search) {
            const query = parse(this.props.location.search, { ignoreQueryPrefix: true });
            this.getProducts(query.search);
            }
    }

    getProducts(search) {        
        this.setState({ search, products : [], categories: []});
        this.reqGetProducts(search)
            .then( res => {
                let { products, categories } = res
                this.setState({
                    products,
                    categories 
                })
            })
    }
    async reqGetProducts (search) {  
        const res = await fetch(`/api/items?search=${encodeURI(search)}`)
                            .then(res => res.json())
                            .catch(err => console.log(err))
        return res;
    }
    render() {
        return (
            <main>
                <Search history={this.props.history}/>
                <Breadcrumbs categories={this.state.categories}/>
                <ItemsList products={this.state.products} />
            </main>
        )
    }
}

export default SearchPage;