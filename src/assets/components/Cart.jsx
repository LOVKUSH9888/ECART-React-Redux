import React from 'react'
import { useSelector } from 'react-redux'

import Container from "react-bootstrap/Container";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Cart = () => {

  const products = useSelector(state => state.cart);


  const cards = products.map((product) => (
    <div
      className="col-md-12 text-center"
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
    <div className='row'>
      {cards}
    </div>
  )
}

export default Cart
