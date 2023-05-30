import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../../store/cartSlice';


import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Cart = () => {

  const products = useSelector(state => state.cart);

  const dispatch = useDispatch();

  const removeToCart = (id) => {
    dispatch(remove(id));
  }

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
          <Button variant="danger" onClick={() => removeToCart(product.id)}>
            Remove Item
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
