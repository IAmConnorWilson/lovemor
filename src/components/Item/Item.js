import React, {Component} from 'react';

import './item.css';

class Item extends Component {
    constructor() {
        super()
        this.state = {hoverText: ''}
    }

    componentWillMount() {
    }

    onMouseEnter() {
        console.log('we hovering');
        this.setState({hoverText: <div className="hover-info"><h5>{this.props.itemDetails.name}</h5></div>});
    }

    onMouseLeave() {
        console.log('we leaving');
        this.setState({hoverText: ''});
    }

    render() {
        return (
            <div className="item-container">
                <div className="item-content">
                    <img className="item-image"
                         alt={this.props.itemDetails.name + ' image'} src={this.props.itemDetails.defaultImg}></img>
                    <div className="hover-text" onClick={() => {
                        this.props.history.push('/item/' + this.props.itemDetails.id)
                    }}
                         onMouseEnter={this.onMouseEnter.bind(this)}
                         onMouseLeave={this.onMouseLeave.bind(this)}
                    >
                        {this.state.hoverText}
                    </div>
                </div>

            </div>
        );
    }
}

export default Item;