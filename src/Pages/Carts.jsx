import { useThemeHook } from "../GlobalComponent/ThemeProvider";
import { useCart } from "react-use-cart";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { BsCartX, BsCartCheck } from "react-icons/bs";
import { Link } from "react-router-dom";


function Carts() {
  const [theme] = useThemeHook();
  const {
    isEmpty,
    cartTotal,
    emptyCart,
    removeItem,
    updateItemQuantity,
    items,
    setItems
  } = useCart();
  return (
    <div className={`${theme ? "bg-light-black" : "bg-light-2"} `}>
      <Container className="py-5">
        <h1
          className={`${
            theme ? "text-light" : "text-light-primary"
          } text-center py-5`}
        >
          {isEmpty ? "your cart is Empty" : "The Cart"}
        </h1>

        <Row>
          <Table
            responsive="sm"
            striped
            bordered
            hover
            variant={theme ? "dark" : "light"}
            className="mb-5"
          >
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index} style={{ textAlign: "center" }}>
                    <td>
                      <div
                        style={{
                          background: "white",
                          height: "8rem",
                          width: "100%",
                          overflow: "hidden",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div style={{ width: "5rem" }}>
                          <img
                            src={item.image}
                            alt={item.title}
                            style={{ width: "5rem" }}
                          />
                        </div>
                      </div>
                    </td>
                    <td
                      style={{
                        whiteSpace: "wrap",
                        width: " 14rem",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.title}
                    </td>
                    <td>LE. {item.price}</td>
                    <td>Quantity {item.quantity}</td>
                    <td>
                      <Button
                        className="mx-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </Button>
                      <Button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </Button>
                      <Button
                        variant="danger"
                        className="mx-2"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove Item
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>

          {!isEmpty && (
            <Row
              style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                width: "100%",
              }}
              className={`${
                theme ? "bg-light-black text-light" : "bg-light text-black"
              } justify-content-center py-2`}
            >
              <Col>
                <h4>Total Price LE. {cartTotal}</h4>
              </Col>
              <Col>
                <Button variant="danger" onClick={() => emptyCart()}>
                  <BsCartX size="1.7rem" />
                  Clear Cart
                </Button>
                <Link>
                <Button className="px-2 mx-2" onClick={() => setItems(items)}>
                  <BsCartCheck size="1.7rem" />
                  Create Order
                </Button>
                </Link>
              </Col>
            </Row>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Carts;
