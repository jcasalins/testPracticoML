import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from '../../../assets/images/Logo_ML.png';
import logo2x from '../../../assets/images/Logo_ML@2x.png.png';


import icSearch from '../../../assets/images/ic_Search.png';
import icSearch2x from '../../../assets/images/ic_Search@2x.png.png';



import './search.scss';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { search: '' };
        this.submitSearch = this.submitSearch.bind(this);
        this.changeSearch = this.changeSearch.bind(this);
        this.keyPress = this.keyPress.bind(this);
    }

    submitSearch() {
        if (this.state.search) {
            this.props.history.push(`/items?search=${this.state.search}`);
        }
    }
    changeSearch(event) {
        const target = event.target;
        this.setState({
            search: target.value,
        });
    }
    keyPress(e) {
        if (e.keyCode === 13) {
            this.submitSearch();
        }
    }
    render() {
        return (
            <header className="header-ML">
                <nav className="container">
                    <div className="row content">
                        <div className="col-2 col-md-1  logo-content" >
                            <div className="logo">
                                <Link to="/">
                                    <img src={logo} srcSet={`${logo2x} 2x`} alt="logo" />
                                </Link>
                            </div>
                            
                        </div>
                        <div className="col-10 col-md-11 search-content">
                            <div className="form-search">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Nunca dejes de buscar"
                                        onChange={this.changeSearch}
                                        onKeyDown={this.keyPress}
                                    />
                                    <button type="button" className="btn btn-search"
                                        onClick={this.submitSearch}
                                    >
                                        <img src={icSearch} srcSet={`${icSearch2x} 2x`} alt="Buscar"/>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </nav>
            </header>
        )
    }
}

export default Search;