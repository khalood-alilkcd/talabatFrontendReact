import { Container, Row } from "react-bootstrap";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import CityList from "../Components/CityList";
import { useThemeHook } from "../GlobalComponent/ThemeProvider";

const Home = () => {
  const [theme] = useThemeHook();
  return (
    <div className={theme? 'bg-light-black' : 'bg-light'}>
      <Container className="pt-5">
      <Row>
        <CityList />
      </Row>
    </Container>
    </div>
  );
};

export default Home;
