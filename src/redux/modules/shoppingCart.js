const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export function addToCart(value) {
    return {
        type: ADD_TO_CART,
        value
    }
}

export function removeFromCart(value) {
    return {
        type: REMOVE_FROM_CART,
        value
    }
}

const initialState = [];

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.value];
        case REMOVE_FROM_CART:
            return state.filter((item, index) => item.id.toString() !== action.value.id.toString());
        default:
            return state;
    }
}
