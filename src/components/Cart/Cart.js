import React, {Component} from 'react';

import CartItem from '../../containers/CartItem/CartItem';
import './cart.css';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpened: false
        };
    }

    componentDidMount() {
        document.body.scrollTop = 0;
        document.querySelector('.menu').classList.remove('open');
    }

    closeModal() {
        this.setState({modalOpened: false});
        document.body.classList.remove('modal-opened');
        document.body.style.marginRight = 0;
    }

    getAllCartItems() {
        if (this.props.cart.length > 0) {
            return this.props.cart.map((cartItem, ind) => <CartItem key={ind} {...this.props} itemDetails={cartItem}/>)
        }
        return <div className="emptyCartMsg has-link">Your cart is empty.<br/> <a onClick={() => {
            this.props.history.push('/')
        }}>Continue Shopping</a></div>
    }

    openModal() {
        const scrollBar = document.querySelector('.scrollbar-measure');
        const scrollBarWidth = scrollBar.offsetWidth - scrollBar.clientWidth;
        document.body.classList.add('modal-opened');
        document.body.style.marginRight = `${scrollBarWidth}px`;
        this.setState({modalOpened: true});
    }

    getTotals() {
        if (this.props.cart.length > 0) {
            let totalPrice = 0;
            this.props.cart.forEach(item => {
                totalPrice += Number(item.price)
            });
            return <div>
                <div className="totalBox">
                    <div className="totalText">
                        <h3> Total </h3>
                    </div>
                    <div className="totalNumber">
                        <h3> ${totalPrice} </h3>
                    </div>
                </div>
                <div className="checkoutBtnCtnr">
                    <button className="normalBtn checkoutBtn">Proceed to Checkout</button>
                </div>
            </div>
        }
    }

    render() {
        return (
            <div className="tradesWrapper">
                <div className="addTradeWrapper">
                    <div className="cartTitle allCartTitles">Your Cart</div>
                </div>
                <div className="tradesInfoWrapper">
                    <div className="tradeReqWrapper">
                        <h3 className="unCap">Cart Items</h3>
                        <div className="allTradeRequestsWrapper">
                            {this.getAllCartItems()}
                        </div>
                    </div>
                </div>
                {this.getTotals()}
            </div>
        );
    }
}

export default Cart;