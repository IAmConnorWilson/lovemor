import React, {Component} from 'react';
import NameCellRenderer from './NameCellRenderer/NameCellRenderer';
import EditButtonCellRenderer from './EditButtonCellRenderer/EditButtonCellRenderer';
import './manageinventory.css';
import {AgGridReact} from 'ag-grid-react';
import InventoryItemDetails from '../InventoryItemDetails/InventoryItemDetails';

class ManageInventory extends Component {
    constructor() {
        super();
        this.state = {
            newItemActive: false,
            newItem: {},
            editItemActive: false,
            editItem: {}
        };
        this.columnDefs = [
            {headerName: 'Item', field: 'name', cellRendererFramework: NameCellRenderer},
            {field: 'Edit', width: 100, cellRendererFramework: EditButtonCellRenderer},
        ];
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.gridApi.sizeColumnsToFit();
    }

    openNewItem() {
        console.log('open sesame');
        this.setState({newItemActive: true})
    }

    cancelNewItem() {
        this.setState({newItemActive: false})
    }

    componentDidMount() {
        document.body.scrollTop = 0;
        document.querySelector('.menu').classList.remove('open');
    }

    getInventoryList() {
        if (this.props.inventory.length > 0) {
            return ( <div className="inventoryTableCntr">
                <div
                    style={{
                        boxSizing: 'border-box',
                        height: '100%',
                        width: '100%'
                    }}
                    className="ag-theme-material">
                    <AgGridReact
                        id="myGrid"
                        columnDefs={this.columnDefs}
                        rowData={this.props.inventory}
                        onGridReady={this.onGridReady.bind(this)}
                    />
                </div>
            </div>)
        }
        return <div>Loading...</div>

    }

    render() {
        return (
            <div className="inventoryWrapper">
                <InventoryItemDetails isOpen={this.state.newItemActive} cancelNewItem={this.cancelNewItem.bind(this)}/>
                <div id="inventoryTitle">
                    <h5><u>Current Inventory</u></h5>
                    <button className="newItemBtn" onClick={() => {
                        this.openNewItem()
                    }}>+ New Item
                    </button>
                </div>
                {this.getInventoryList()}
            </div>
        );
    }
}

export default ManageInventory;