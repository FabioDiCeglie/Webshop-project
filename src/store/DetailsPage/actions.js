import axios from "axios";

export const getDetailOfOneProduct = (data) => ({
  type: "homepage/getDetailProduct",
  payload: data,
});

export function getDetailProduct(id) {
  // Return the thunk itself, i.e. a function
  return async function thunk(dispatch, getState) {
    try {
      const response = await axios.get(`http://localhost:4000/products/${id}`);

      const product = response.data;

      //console.log("what is product", product);
      dispatch(getDetailOfOneProduct(product));
    } catch (error) {
      console.log(error);
    }
  };
}
