import React, { useState, useEffect } from "react";
import { useThemeHook } from "../GlobalComponent/ThemeProvider";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ClientDetail = (props) => {
  const [theme] = useThemeHook();
  const [clients, setClients] = useState([]);
const {id} = useParams();
  useEffect(() => {
    fetch(`http://localhost:9000/clients/${props.clientId}`)
      .then((response) => response.json())
      .then((data) => setClients(data))
      .catch((error) => console.error("Error fetching clients:", error));
  }, []);

  return (
    <Row className="pt-5">
      <Col
        xs={10}
        md={7}
        lg={7}
        className={`${theme ? "text-light" : "text-black"} product-details`}
      >
        <h1>{clients.name}</h1>

        <b
          className={`${
            theme ? "text-dark-primary" : "text-light-primary"
          } h4 mt-3 d-block`}
        >
          {clients.description}
        </b>
        <br />
        <b className="h5">4.1 ⭐</b>
        <p className="mt-3 h5" style={{ opacity: "0.8", fontWeight: "400" }}>
          {clients.brand}
        </p>
      </Col>
    </Row>
  );
};

export default ClientDetail;
