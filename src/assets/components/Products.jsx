import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useDispatch } from "react-redux";
import { add } from "../../store/cartSlice";

const Products = () => {
  //using the Despatch
  const dispatch = useDispatch();

  //initial state whike calling the API
  const [products, setProducts] = useState([]);

  //calling the API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  //Onclick const declaration
  const addToCart = (product) => {
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <div
      className="col-md-3 text-center"
      key={product.id}
      style={{ marginBottom: "10px" }}
    >
      <Card style={{ width: "18rem" }}>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Product Hub</h1>
      <div className="row">{cards}</div>
    </>
  );
};

export default Products;
