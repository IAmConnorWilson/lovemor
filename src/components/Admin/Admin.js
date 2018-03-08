import React, {Component} from 'react';

import {Route, Switch} from 'react-router';
// --------- PAGES --------------------- //
// --------- END PAGES ----------------- //

import './admin.css';

class Admin extends Component {
    componentDidMount() {
        document.body.scrollTop = 0;
        document.querySelector('.menu').classList.remove('open');
    }

    render() {
        return (
            <div>
                <Switch>
                    {/*<Route exact path='/admin/inventory' component={Error}/>*/}
                    {/*<Route exact path='/admin/orders' component={Error}/>*/}
                    <Route path='*' component={Error}/>
                </Switch>
            </div>
        );
    }
}

export default Admin;