import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({}); // <-- Change this line
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((data) => data.json())
      .then((result) => setProduct(result));
  }, []);
  return (
    <div className="row">
      <div className="col-md-12 text-center">
        <h1>Product Details</h1>
        <Card key={product.id} className=" text-center">
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
            <p>{product.description}</p>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
