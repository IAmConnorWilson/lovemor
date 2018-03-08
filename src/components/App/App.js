import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import fire from '../../fire'

import {Route, Switch} from 'react-router';
// import Footer from '../Footer/index';
// --------- PAGES --------------------- //
import HeaderContainer from '../../containers/Header/Header';
import ShopContainer from '../../containers/Shop/Shop';
import CartContainer from '../../containers/Cart/Cart';
import ItemDetails from '../../containers/ItemDetails/ItemDetails';
import About from '../About/About';
import Error from '../Error/Error';
import Footer from '../Footer/Footer';
// --------- END PAGES ----------------- //

import './app.css';
import '../../styles/animation.css';
import ManageInventory from '../../containers/ManageInventory/ManageInventory';

class App extends Component {
    componentWillMount() {
        /* Create reference to inventory in Firebase Database */
        // TODO move logic for this into action
        const inventory = fire.database().ref('inventory');
        inventory.once('value', (data) => {
            this.props.setInventory(data.val());
        });
    }

    render() {
        return (
            <div className="wrapper">
                <HeaderContainer/>
                <ReactCSSTransitionGroup
                    transitionName="content"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    <div>
                        <Switch>
                            <Route exact path='/' component={ShopContainer}/>
                            <Route exact path="/item/:id" component={ItemDetails}/>
                            <Route exact path='/cart' component={CartContainer}/>
                            <Route exact path='/about' component={About}/>
                            {/*TODO put back in for auth guardeding routes*/}
                            {/*<Route path='/admin' component={AdminContainer}/>*/}
                            <Route exact path='/inventory' component={ManageInventory}/>
                            <Route exact path='/orders' component={Error}/>
                            <Route path='*' component={Error}/>
                        </Switch>
                    </div>
                </ReactCSSTransitionGroup>
                <Footer/>
            </div>
        );
    }
}

export default App;