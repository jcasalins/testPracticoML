import React, { Component } from "react";
import { Link } from "react-router-dom";


class Item extends Component {
    constructor (props) {
        super(props)
        this.state = {
            dimensions: {}
        }
        this.onImgLoad = this.onImgLoad.bind(this);
    }

    onImgLoad({target:img}) {
        this.setState({dimensions:{height:img.naturalHeight,
                                   width:img.naturalWidth}});
    }
    setDimensions (dimensions) {
        const {width, height} = dimensions;
        return {
            'max-width' : width,
            'max-height': height
        }
    }
    render () {
        
        
        return (
            <div className="row item">
                <div className="col-12 col-sm-3 col-md-3 image-item">
                    <Link to={`/items/${this.props.product.id}`} className="box-image">
                        <img src={this.props.product.thumbnail} alt={this.props.product.title}
                            style={this.setDimensions(this.state.dimensions)} 
                            onLoad={this.onImgLoad}/>
                    </Link>
                </div>
                <div className="col-12 col-sm-6 col-md-7 detail-item">
                    <p className="price-item">
                        <Link to={`/items/${this.props.product.id}`}>
                            $ {this.props.product.price}
                        </Link>
                    </p>
                    <p className="descrip-item">
                        <Link to={`/items/${this.props.product.id}`}>
                            {this.props.product.title}
                        </Link>
                    </p>
                </div>
                <div className="col-12 col-sm-3 col-md-2 state-item">
                    <p className="city">{this.props.product.address.state_name}</p>
                </div> 
            </div>
        )
    }
}

export default Item;