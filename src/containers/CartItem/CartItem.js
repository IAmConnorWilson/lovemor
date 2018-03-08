import {connect} from 'react-redux';
import CartItem from '../../components/CartItem/CartItem.js'
import {removeFromCart} from '../../redux/modules/shoppingCart';


function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: (item) => dispatch(removeFromCart(item))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartItem);