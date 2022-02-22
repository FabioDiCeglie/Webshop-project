import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/auth/actions";
import { useEffect, useState } from "react";
import {
  getAllProducts,
  getAllCategories,
  deleteOneProduct,
} from "../store/homepage/actions";
import { useSelector } from "react-redux";
import { getProducts, getCategories } from "../store/homepage/selectors";
import { signUp } from "../store/auth/selectors";
export default function Homepage() {
  const dispatch = useDispatch();

  const [filterByCategory, setFilterByCategory] = useState("all");
  const [filteredList, setFilteredList] = useState(null);

  const allProducts = useSelector(getProducts);
  const allCategories = useSelector(getCategories);
  const userLoggedIn = useSelector(signUp);

  //console.log("what are all categories", allCategories);
  //console.log("what are all products", allProducts);
  useEffect(() => {
    //console.log(filterByCategory);
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
        {userLoggedIn ? (
          <Link to="/profile/user">
            <button>Profile</button>
          </Link>
        ) : (
          ""
        )}
      </div>
      <select
        value={filterByCategory}
        onChange={(e) => setFilterByCategory(e.target.value)}
      >
        <option value="all">AllCategories</option>

        {allCategories.map((category, i) => (
          <option value={category.id} key={i}>
            {category.title}
          </option>
        ))}
      </select>
      <div className="homepageBlock">
        <div className="productBlock">
          {filteredList
            ? filteredList.map((product, i) => (
                <div key={i} className="productCard">
                  {userLoggedIn ? (
                    <button
                      onClick={() => dispatch(deleteOneProduct(product.id))}
                    >
                      X
                    </button>
                  ) : (
                    ""
                  )}
                  <h4> Product : {product.title}</h4>
                  <img
                    className="ImageProduct"
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
      </div>
    </div>
  );
}
