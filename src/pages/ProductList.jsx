import React from 'react';
import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";
export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  function addToCart(product) {
    dispatch(add(product));
  }
  const cards = products.map((product, i) => (
    <div
      className="col-md-3 text-center"
      style={{ marginBottom: "10px" }}
      key={i}
    >
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={product.image}
          style={{ width: "100px", height: "120px", margin: "auto" }}
        />
        <Card.Body>
          <Card.Title to={`product/${product.id}`} as={Link}>
            {product.title}
          </Card.Title>
          <Card.Text>
            <b>INR {product.price}</b>
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: "white" }}>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return <div className="row">{cards}</div>;
};
