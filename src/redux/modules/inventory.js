// import testState from './test.json';
const SET_INVENTORY = 'SET_INVENTORY';
const GET_INVENTORY = 'GET_INVENTORY';

export function setInventory(value) {
    return {
        type: SET_INVENTORY,
        value
    }
}

export function getInventory(value) {
    return {
        type: GET_INVENTORY,
        value
    }
}


const initialState = [];

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_INVENTORY:
            return [...action.value];
        default:
            return state;
    }
}
