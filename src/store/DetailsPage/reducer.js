const initialState = {
  detailProduct: [],
};
export default function detailsProductsReducer(state = initialState, action) {
  switch (action.type) {
    case "homepage/getDetailProduct": {
      return {
        ...state,
        detailProduct: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
