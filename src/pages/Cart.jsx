import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
export const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.data);
  const removeToCart = (id) => {
    dispatch(remove(id));
  };
  const cards = products.map((product, i) => (
    <div className="col-md-12 text-center" style={{ marginBottom: "10px" }}>
      <Card key={product.id} className=" text-center h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "120px" }}
            className=" text-center"
          />
        </div>
        <Card.Body>
          <Card.Title to="/product/${product.id}" as={Link}>
            {product.title}
          </Card.Title>
          <Card.Text> INR {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: "white" }}>
          <Button variant="danger" onClick={() => removeToCart(product.id)}>
            Remove To Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1> Cart </h1>
      <div className="row">{cards}</div>
    </>
  );
};
