import React from 'react';

import _ from 'lodash';

function Breadcrumbs (props) {
    let categories = []
    if (!_.isEmpty(props.categories)) {
        categories = props.categories.map((category) => {
            return <span className="crumb" key={category.id}>{category.name}</span>
        });
        
    }
    return (
        <div className="container">
            <div className="breadcrumbs">
                <p> 
                    {categories}
                </p>
            </div>
        </div>
    )
}

export default Breadcrumbs