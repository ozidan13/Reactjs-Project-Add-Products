import React, { Component } from 'react';

class Products extends Component{
    render(){
        return(
            <div className="cardParent col-md-4 col-sm-6">
                <div className="card">
                    <div className="card-header">
                        <img style={{maxWidth:' 100%'}} src={this.props.img} alt="imag"/>
                    </div>
                    <div className="card-body">
                        <h2>{this.props.name}</h2>
                        <h5>{this.props.type}</h5>
                        <div>{this.props.price}</div>
                        <div>{this.props.productinfo}</div>
                        <div>{this.props.website}</div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Products;    