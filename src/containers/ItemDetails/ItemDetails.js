import {connect} from 'react-redux';
import ItemDetails from '../../components/ItemDetails/ItemDetails.js'
import {addToCart, removeFromCart} from '../../redux/modules/shoppingCart';


function mapStateToProps(state) {
    return {
        inventory: state.inventory,
        cart: state.shoppingCart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => dispatch(addToCart(item)),
        removeFromCart: (item) => dispatch(removeFromCart(item))
    }; // here we're mapping actions to props
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemDetails);