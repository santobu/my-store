import { useEffect, useState } from "react";
import axios from "axios";

const ProductLists = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3000/products",
    })
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleLinkClick = () => {
    console.log("open product page");
  };

  console.log("products: ", products);

  return (
    <div>
      <header>Our products</header>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {products &&
          products.map((item) => {
            return (
              <article
                style={{
                  border: "1px solid",
                  flexBasis: "calc(100% / 5 - 2px)",
                }}
                key={item.id}
              >
                <a
                  href=""
                  title="See product details"
                  onClick={handleLinkClick}
                >
                  <img src={item.small_image.url} style={{ width: "100%" }} />
                  <div>{item.name}</div>
                  <div>
                    {`${
                      item.price &&
                      item.price.regularPrice &&
                      item.price.regularPrice.amount.value
                    }`}
                  </div>
                </a>
              </article>
            );
          })}
      </div>
    </div>
  );
};

export default ProductLists;
