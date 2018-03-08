import React, {Component} from 'react';
import './shop.css';
import ItemContainer from '../../containers/Item/Item';

class Shop extends Component {
    componentDidMount() {
        document.body.scrollTop = 0;
        document.querySelector('.menu').classList.remove('open');
    }

    render() {
        if (this.props.inventory.length > 0) {
            return (
                <main className="main">
                    {this.props.inventory.map((item, i) => <ItemContainer key={i} {...this.props} itemDetails={item}/>)}
                </main>
            );
        }
        return (
            <div>Loading...</div>
        )

    }
}

export default Shop;