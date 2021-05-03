// Multiple Reducers
//       1.
const redux = require("redux");
const createStore = redux.createStore;

//string constraints
//      2.
const BUY_SWEETS = "BUY_SWEETS";
const BUY_ICECREAM = "BUY_ICECREAM";

// action creators
//     3.
function buySweets() {
  return {
    type: BUY_SWEETS,
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

// initialize the state
//.     4. to make use of reducers 1st initialize state
const initialState = {
  numOfSweets: 200,
  numOfIceCreams: 50,
};

//       5.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_SWEETS:
      return {
        // to keep a copY

        ...state,

        // if te stt is trUe
        numOfSweets: state.numOfSweets - 1,
      };

    case BUY_ICECREAM:
      return {
        // to keep a copY
        ...state,

        // if te stt is trUe
        numOfIceCreams: state.numOfIceCreams - 1,
      };

    default:
      return state;
  }
};

//store

const store = createStore(reducer);
//to see d Initial State and get a vale frm d store
console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State Value", store.getState());
});

// to call te actio    // accepts action as parameter
store.dispatch(buySweets());
store.dispatch(buySweets());
store.dispatch(buySweets());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
