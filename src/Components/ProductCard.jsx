import { Button, Card, Row, Col, Image } from "react-bootstrap";
import { useThemeHook } from "../GlobalComponent/ThemeProvider";
import { useCart } from "react-use-cart";
import { BsCartPlus } from "react-icons/bs";

const ProductCard = (props) => {
  let { image, title, price, description, category } = props.data;
  const [theme] = useThemeHook();
  const { addItem } = useCart();
  const addToCart = () => {
    addItem(props.data);
  };
  return (
    <div>
      <Row style={{ width: "50rem" }}>
        <Col className="col-3">
          <div>
            <Image
              src={image}
              alt={title}
              style={{ width: "100%", height: "11rem" }}
              className="p-3 mb-2rem"
            />
          </div>
        </Col>
        <Col className="col-8">
          <div>
            <h6>{title.slice(0, 40)}</h6>
            <p>{description.slice(0, 100)}</p>
            <div className="d-flex justify-content-between align-item-center">
              <p className="pt-2">
                {price} <span>L.E</span>
              </p>
              <Button onClick={() => addToCart()} style={{ width: "10rem" }}>
                <BsCartPlus size="1.8rem" />
                add to card
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default ProductCard;
