import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/auth/actions";
import { useEffect } from "react";
import { getAllProducts } from "../store/homepage/actions";
import { useSelector } from "react-redux";
import { getProducts } from "../store/homepage/selectors";
export default function Homepage() {
  const dispatch = useDispatch();

  const allProducts = useSelector(getProducts);

  //console.log("what are all products", allProducts);

  useEffect(() => {
    dispatch(getAllProducts());
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
      {allProducts
        ? allProducts.map((product, i) => (
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
