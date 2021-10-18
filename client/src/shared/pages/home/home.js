import React, { Component } from "react";
import Search from "../../components/search/search";


class HomePage extends Component {
    render() {
        return (
            <main>
                <Search history={this.props.history}/>
                <h1>home</h1>
            </main>
        )
    }
}

export default HomePage;