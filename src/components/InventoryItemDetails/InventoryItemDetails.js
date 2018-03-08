import React, {Component} from 'react';
import './inventoryitemdetails.css';

class InventoryItemDetails extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.isOpen) {
            this.modalWrapper.classList.add('open')
        } else {
            this.modalWrapper.classList.remove('open')
        }
    }

    render() {
        return (
            <div className="addItemWrapper" ref={node => {
                this.modalWrapper = node;
            }}>
                <div className="modal">
                    <div className="heading">
                        <h3>Add Item</h3>
                    </div>
                    <div className="itemWrapper">
                        <div className="itemInfoWrapper">
                            <div className="inputWrapper">
                                <label htmlFor="itemName">Name:</label>
                                <input id="itemName" name="itemName" type="text" className="itemName"
                                       placeholder="Enter Name" required/>
                            </div>
                            <div className="priceWrapper">
                                <div className="inputWrapper">
                                    <label htmlFor="itemPrice">Price:</label>
                                    <input min="0" id="itemPrice" name="itemPrice" type="number" className="itemPrice"
                                           placeholder="Enter Price" required/>
                                </div>
                                <div className="inputWrapper">
                                    <label htmlFor="itemOwner">Owner:</label>
                                    <input id="itemOwner" name="itemOwner" type="text" className="itemOwner"
                                           placeholder="Owner Name"/>
                                </div>
                            </div>
                            <div className="inputWrapper">
                                <label htmlFor="itemSizing">Sizing & Quantity:</label>
                            </div>
                            <div className="inputWrapper">
                                <label htmlFor="itemDescription">Description:</label>
                                <textarea name="itemDescription" id="itemDescription" className="itemDescription"
                                          placeholder="Enter Item Description"/>
                            </div>
                            <div className="inputWrapper">
                                <label htmlFor="itemTags">Tags(Comma Separated):</label>
                                <textarea name="itemTags" id="itemTags" className="itemTags" placeholder="Enter Tags"/>
                            </div>
                        </div>
                    </div>
                    <div className="buttonWrapper">
                        <button className="saveItemBtn">Save</button>
                        <button className="cancelItemBtn" onClick={() => this.props.cancelNewItem()}>Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default InventoryItemDetails;