import {connect} from 'react-redux';
import App from '../../components/App/App.js'
import {setInventory} from '../../redux/modules/inventory';


function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        setInventory: (value) => {
            dispatch(setInventory(value))
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);