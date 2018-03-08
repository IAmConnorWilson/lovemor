import { connect } from 'react-redux';
import InventoryItemDetails from '../../components/InventoryItemDetails/InventoryItemDetails.js'


function mapStateToProps(state, ownProps) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }; // here we're mapping actions to props
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InventoryItemDetails);