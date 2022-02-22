import axios from "axios";

export const getProducts = (data) => ({
  type: "homepage/getProducts",
  payload: data,
});

export function getAllProducts() {
  // Return the thunk itself, i.e. a function
  return async function thunk(dispatch, getState) {
    // TODO:
    // make a POST API request to `/login`
    const response = await axios.get("http://localhost:4000/products");

    //console.log("what is response", response.data);

    const products = response.data;
    dispatch(getProducts(products));
  };
}

export const deleteProduct = (id) => ({
  type: "homepage/deleteProduct",
  payload: id,
});

export function deleteOneProduct(id) {
  return async function thunk(dispatch, getState) {
    try {
      const response = await axios.delete(
        `http://localhost:4000/products/delete/${id}`
      );

      console.log("what is response", response.data);

      dispatch(deleteProduct(id));
    } catch (error) {
      console.log(error);
    }
  };
}
export const getCategories = (data) => ({
  type: "homepage/getCategories",
  payload: data,
});

export function getAllCategories() {
  // Return the thunk itself, i.e. a function
  return async function thunk(dispatch, getState) {
    // TODO:
    // make a POST API request to `/login`
    const response = await axios.get("http://localhost:4000/categories");

    //console.log("what is response", response.data);

    const categories = response.data;
    dispatch(getCategories(categories));
  };
}
