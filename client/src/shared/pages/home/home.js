import React, { Component } from "react";
import Search from "../../components/search/search";
import Viewed from "../../components/viewed/viewed";
import Welcome from "../../components/Welcome/welcome";
import "./home.scss";

import _ from 'lodash';

class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            location: ''
        };

    }


    
    getRecentlyViewed() {
        return (localStorage.getItem('viewed') !== null) ? JSON.parse(localStorage.getItem('viewed')) : [];
    }
    recentlyViewed() {
        let ls = this.getRecentlyViewed();
        let viewed;
        if (!_.isEmpty(ls)) {
            viewed = ls.map((product) => {
                return <Viewed key={ product.id } product={ product } />;
            });
        }
        return viewed;
    }

    render() {
        return (
            <main>
                <Search history={this.props.history}/>
                <div className="container container-home">
                    <div className="row">
                        <Welcome />
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {this.recentlyViewed()}
                    </div>
                </div>
            </main>
        )
    }
}

export default HomePage;