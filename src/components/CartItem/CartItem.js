import React, {Component} from 'react';
import './cartitem.css';

class CartItem extends Component {

    render() {
        return (
            <div className="ptWrapper">
                <div className="upper">
                    <div className="cartImgContainer" onClick={()=>this.props.history.push('/item/' + this.props.itemDetails.id)}>
                        <img className="cartImg" alt={this.props.itemDetails.name} src={this.props.itemDetails.defaultImg} />
                    </div>
                    <div className="item-description">
                        <h4>
                            {this.props.itemDetails.name}
                        </h4>
                        <div>
                            {this.props.itemDetails.description}
                        </div>
                    </div>
                    <div>
                        ${this.props.itemDetails.price}
                    </div>
                </div>
                <div className="tradeBtnWrapper lower">
                    <button className="cancelBtn normalBtn"
                            onClick={() => this.props.removeFromCart(this.props.itemDetails)}>Remove Item
                    </button>
                </div>
            </div>
        );
    }
}

export default CartItem;
