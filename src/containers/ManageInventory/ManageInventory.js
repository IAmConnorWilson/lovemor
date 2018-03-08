import {connect} from 'react-redux';
import ManageInventory from '../../components/ManageInventory/ManageInventory'


function mapStateToProps(state) {
    return {
        inventory: state.inventory
    }
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ManageInventory);