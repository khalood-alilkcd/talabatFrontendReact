import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useThemeHook } from "../GlobalComponent/ThemeProvider";
import { Col, Image, Row } from "react-bootstrap";
import ProductCard from "../Components/ProductCard";

const ProductsClient = () => {
  const [client, setClient] = useState(null);
  const [products, setProductData] = useState([]);
  const { id } = useParams();
  const [theme] = useThemeHook();

  async function getResponse() {
    try {
      const res = await fetch(
        `http://localhost:9000/products?clientId=${id}`
      ).then((res) => res.json());
      setProductData(await res);
      console.log(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      // Handle error (e.g., show error message to user)
    }
  }

  useEffect(() => {
    getResponse();
  }, []);

  useEffect(() => {
    // Make sure the id is defined before fetching data
    if (!id) {
      console.error("Client ID is undefined");
      return;
    }

    fetch(`http://localhost:9000/clients/${id}`)
      .then((response) => {
        // Check if the response is successful
        if (!response.ok) {
          throw new Error("Failed to fetch client");
        }
        return response.json();
      })
      .then((data) => setClient(data))
      .catch((error) => console.error("Error fetching client:", error));
  }, [id]);

  return (
    <div>
      <div
        style={{ height: "auto" }}
        className={` pt-5 text-center ${
          theme ? "bg-light-black text-light" : "bg-light text-black"
        } `}
      >
        {client ? (
          <div className=" pt-5 d-flex justify-content-center align-item-center flex-column">
            <h2>Products for Client: {client.name}</h2>
            <p>{client.brand}</p>
            {/* Display products for this client */}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div
        className={` py-5 text-center ${
          theme ? "bg-light-black text-light" : "bg-light "
        } `}
      >
        <Row>
          <Col className="col-3">
            <h2>sorting</h2>
          </Col>
          <Col
            className="col-9"
            style={{ height: "30rem", overflowY: "scroll" }}
          >
            {products.map((product) => (
              <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                <ProductCard data={product} />
              </Col>
            ))}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductsClient;
