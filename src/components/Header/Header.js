import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

import './header.css';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        this.previousWidth = 0;
        this.menuButton = (
            <button className="menuBtn"
                    onClick={
                        () => {
                            document.querySelector('.menu').classList.toggle('open');
                        }
                    }
            >
                MENU
            </button>
        );
        // TODO authguard this based on if oauth login
        this.loggedInMenu = (
            <div className="menu">
                <NavLink key={1} to="/" className="navLink">
                    Shop
                </NavLink>
                <NavLink key={2} to="/cart" className="navLink">
                    Cart
                </NavLink>
                <NavLink key={3} to="/about" className="navLink">
                    About Us
                </NavLink>
                <NavLink key={4} to="/inventory" className="navLink">
                    Manage Inventory
                </NavLink>
                <NavLink key={5} to="/orders" className="navLink">
                    Track Orders
                </NavLink>
            </div>
        );

        this.setMenuState(window.innerWidth);
        this.previousWidth = window.innerWidth;

    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setMenuState(window.innerWidth);
        });
    }

    setMenuState(width) {
        if (this.previousWidth !== width) {
            if (width > 768) {
                const menu = document.querySelector('div.menu');
                if (menu) {
                    menu.classList.remove('open');
                }
                this.setState({menuActive: false});
            } else {
                this.setState({menuActive: true});
            }
            this.previousWidth = width;
        }
    }

    render() {
        return (
            <header className="header">
                <h1>
                    <Link to="/" className="logo">
                        Løvemør
                    </Link>
                </h1>
                {this.state.menuActive ? this.menuButton : ''}
                {this.loggedInMenu}
            </header>
        );
    }
}

export default Header;