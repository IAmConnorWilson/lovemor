import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Slider from 'react-slick';
import './itemdetails.css';

class ItemDetails extends Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        this.getItemDetails(this.props.match.params.id, this.props.inventory);
        document.body.scrollTop = 0;
        document.querySelector('.menu').classList.remove('open');
    }

    componentWillReceiveProps(nextProps) {
        this.getItemDetails(this.props.match.params.id, nextProps.inventory)
    }

    getItemDetails(id, inventory) {
        // TODO as inventory grows we will need to build this out into an additional service
        if (inventory.length > 0) {
            let itemDetails = inventory.find(item => item.id.toString() === id);
            this.setState({details: itemDetails})
        }
    }

    getSlider() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                {this.state.details.detailImages.map((imageSrc, ind) => {
                    return <div className="itemImgWrapper" key={ind}><img className="detailImg" alt={this.state.details.name} src={imageSrc} /></div>
                })}
            </Slider>
        )
    }

    getCartButton() {
        const currentCart = this.props.cart.find(item => item.id.toString() === this.state.details.id.toString());
        if (currentCart) {
            return <button className="cancelTradeBtn normalBtn"
                           onClick={() => this.handleOnClick(this.state.details, false)}>
                Remove From Cart
            </button>
        }
        return <button className="reqTradeBtn normalBtn" onClick={() => this.handleOnClick(this.state.details)}>Add To
            Cart</button>
    }

    handleOnClick(item, addToCart = true) {
        if (addToCart) {
            this.props.addToCart(item);
        } else {
            this.props.removeFromCart(item);
        }
    }

    render() {
        if (this.state.details) {
            return (
                <div className="itemPageWrapper">
                    {this.getSlider()}
                    <div className="itemInfoWrapper">
                        <NavLink className="backLink" to="/">
            <span className="small">
              <svg fill="#000000" height="13" viewBox="0 0 18 15" width="13" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10l5 5 5-5z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
            </span>All Items
                        </NavLink>
                        <h3 className="itemName">{this.state.details.name}</h3>
                        <p className="itemCost frm">${this.state.details.price}</p>
                        <p className="description">
                            {this.state.details.description}
                        </p>
                        <p className="seller frm">By <span>{this.state.details.owner}</span></p>
                        {this.getCartButton()}
                    </div>
                </div>
            );
        }
        return <div>Loading...</div>
    }
}

export default ItemDetails;