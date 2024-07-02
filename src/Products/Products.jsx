import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_Products_CAT } from "../Store/Slices/products_slice";
import { LifeLine } from "react-loading-indicators";
import cssProduct from "./Products.module.css";

export default function Products() {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(fetch_Products_CAT());
  }, []);

  const filterProducts = (cat) => {
    const updatedList = products.filter((x) => x.category === cat);
    setProduct(updatedList);
  };

  return (
    <>
      {isLoading ? (
        <div className={cssProduct.Loading}>
          <LifeLine
            color="#32cd32"
            size="large"
            text="Loading"
            textColor="#ff0000"
          />
        </div>
      ) : (
        <>
          <div className={cssProduct.Products}>
            <button className="" onClick={() => setProduct(products)}>
              All
            </button>
            <button
              className=""
              onClick={() => filterProducts("men's clothing")}
            >
              Men's Clothing
            </button>
            <button
              className=""
              onClick={() => filterProducts("women's clothing")}
            >
              Women's Clothing
            </button>
            <button className="" onClick={() => filterProducts("jewelery")}>
              Jewelery Clothing
            </button>
            <button className="" onClick={() => filterProducts("electronics")}>
              Electronic
            </button>
          </div>
          <div className={cssProduct.Container}>
            {product.map((prod, ind) => (
              <div className={cssProduct.Element} key={"prod" + (ind + 1)}>
                <img src={prod.image} alt={prod.title} />
                <h5 className="">{prod.title.substring(0, 15)} ...</h5>
                <p className="">{prod.price} $</p>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
