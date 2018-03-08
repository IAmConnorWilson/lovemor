import React, {Component} from 'react';

export default class NameCellRenderer extends Component {

    render() {
        return (
            <div className="imageCtnr">
                <img className="itemImg" alt={this.props.name} src={this.props.data.defaultImg}/>
                <span>{this.props.data.name}</span>
            </div>
        );
    }
}