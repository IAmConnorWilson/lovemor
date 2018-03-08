import {connect} from 'react-redux';
import Cart from '../../components/Cart/Cart.js'


function mapStateToProps(state) {
    return {
        cart: state.shoppingCart
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }; // here we're mapping actions to props
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);