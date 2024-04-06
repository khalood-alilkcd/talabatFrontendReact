import { Container } from "react-bootstrap";
import ClientsInCity from "../Components/ClientsInCity";

const Clients = () => {
  return (
    <Container className="d-flex justify-content-center pt-5">
      <ClientsInCity />
    </Container>
  );
};
export default Clients;
