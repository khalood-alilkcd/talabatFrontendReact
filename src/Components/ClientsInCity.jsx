import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const ClientsInCity = () => {
  const { id, city } = useParams();
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9000/clients?city=${city}`)
      .then((response) => response.json())
      .then((data) => setClients(data))
      .catch((error) => console.error("Error fetching clients:", error));
  }, [city]);

  return (
    <Row className="pt-5 text-center ">
      <h2>Clients in {city}:</h2>
      {clients.map((client) => (
        <Col className="col-4 pt-5">
          <Card key={client.id} style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{client.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link
                to={`/productsClient/${client.id}`}
                variant="primary"
                className="btn btn-primary"
              >
                Go somewhere
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ClientsInCity;
