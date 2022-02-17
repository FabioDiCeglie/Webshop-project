const initialState = {
  products: [],
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "homepage/getProducts": {
      //console.log("what is action", action.payload);
      return {
        ...state,
        products: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
