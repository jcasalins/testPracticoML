import React, { Component } from 'react';
import Search from '../../components/search/search';

class NotFoundPage extends Component {

    render () {
        return (
            <main>
                <Search history={this.props.history}/>
                <div className="container container-not-found">
                </div>
            </main>
        )
    }
}

export default NotFoundPage;