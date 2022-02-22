const initialState = {
  products: [],
  categories: [],
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "homepage/getCategories": {
      //console.log("what is action", action.payload);
      return {
        ...state,
        categories: action.payload,
      };
    }
    case "homepage/getProducts": {
      //console.log("what is action", action.payload);
      return {
        ...state,
        products: action.payload,
      };
    }
    case "homepage/deleteProduct": {
      //console.log("what is the delete action", action.payload);
      const newState = { ...state };
      //console.log("state", newState);
      const filteredProducts = newState.products.filter(
        (product) => product.id !== action.payload
      ); // remove
      //console.log("filter", filteredProducts);
      return {
        ...state,
        products: filteredProducts,
      };
    }
    default: {
      return state;
    }
  }
}
