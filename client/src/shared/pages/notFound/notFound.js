import React, { Component } from 'react';
import Search from '../../components/search/search';

class NotFoundPage extends Component {

    render () {
        return (
            <main>
                <Search history={this.props.history}/>
                <div className="container container-not-found">
                    <div className="row">
                        <div className="page-not-found">
                            <h1 className="title-not-found">Página no encontrada.</h1>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default NotFoundPage;