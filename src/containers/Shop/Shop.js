import { connect } from 'react-redux';
import Shop from '../../components/Shop/Shop.js'


function mapStateToProps(state) {
    return {
        inventory: state.inventory
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }; // here we're mapping actions to props
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Shop);