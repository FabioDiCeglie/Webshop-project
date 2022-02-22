import { useSelector } from "react-redux";
import { getDetailProduct } from "../../store/DetailsPage/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetailOfOneSelectedProduct } from "../../store/DetailsPage/selectors";
import { Link } from "react-router-dom";

export default function DetailsPage() {
  const detailProduct = useSelector(getDetailOfOneSelectedProduct);

  const { id } = useParams();
  const dispatch = useDispatch();

  console.log("what is a detail product", detailProduct);
  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, []);

  return (
    <div>
      {detailProduct ? (
        <div>
          <h1>Detail Product:</h1>
          <h2>{detailProduct.title}</h2>
          <img
            style={{ width: 300 }}
            src={detailProduct.mainImage}
            alt={detailProduct.title}
          />
          <p>{detailProduct.description}</p>
          <p>{detailProduct.price}</p>
        </div>
      ) : (
        "Loading"
      )}
      <Link to="/">
        <button>Homepage</button>
      </Link>
    </div>
  );
}
