import React, { Component } from "react";
import Search from "../../components/search/search";


class HomePage extends Component {
    render() {
        return (
            <main>
                <Search history={this.props.history}/>
                <div className="container">
                    <div className="row">
                        
                    </div>
                </div>
            </main>
        )
    }
}

export default HomePage;