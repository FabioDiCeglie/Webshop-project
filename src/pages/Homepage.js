import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/auth/actions";
import { useEffect, useState } from "react";
import { getAllProducts, getAllCategories } from "../store/homepage/actions";
import { useSelector } from "react-redux";
import { getProducts, getCategories } from "../store/homepage/selectors";
export default function Homepage() {
  const dispatch = useDispatch();

  const [filterByCategory, setFilterByCategory] = useState("all");
  const [filteredList, setFilteredList] = useState(null);

  const allProducts = useSelector(getProducts);
  const allCategories = useSelector(getCategories);

  //console.log("what are all categories", allCategories);
  //console.log("what are all products", allProducts);
  useEffect(() => {
    console.log(filterByCategory);
    if (filterByCategory === "all") {
      setFilteredList(allProducts);
    } else {
      setFilteredList(
        allProducts.filter((p) => {
          return p.categoryId === parseInt(filterByCategory);
        })
      );
    }
  }, [filterByCategory, allProducts]);

  //console.log(filterByCategory);

  useEffect(() => {
    if (allProducts) {
      setFilteredList(allProducts);
    }
  }, [allProducts]);

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, []);

  return (
    <div>
      <div>
        <h1>Homepage</h1>
        <Link to="/login">
          <button>Log In</button>
        </Link>
        <Link to="/signup">
          <button>Sign up</button>
        </Link>
        <Link to="/">
          <button onClick={() => dispatch(logout())}>Log out</button>
        </Link>
      </div>
      <select
        value={filterByCategory}
        onChange={(e) => setFilterByCategory(e.target.value)}
      >
        <option value="all">AllCategories</option>

        {allCategories.map((category) => (
          <option value={category.id}>{category.title}</option>
        ))}
      </select>
      {filteredList
        ? filteredList.map((product, i) => (
            <div key={i}>
              <h4> Product : {product.title}</h4>
              <img
                style={{ width: 200 }}
                src={product.mainImage}
                alt={product.title}
              />
              <p>Price: {product.price}</p>
              <p>Rating: {product.rating}</p>
            </div>
          ))
        : "Loading"}
    </div>
  );
}
