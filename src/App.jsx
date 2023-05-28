import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//For calling the API we use the useEffect & useState because I want my data on load of my page and
import { useState, useEffect } from "react";


function App() {

  const[products, getProducts] = useState([]);

  useEffect (() => {

    //Api fetching

    fetch ('https://fakestoreapi.com/products')
    .then(data => data.json())
    .then(result => getProducts(result))

  }, []);


  const cards = products.map(product => (
    <div className="col-md-3" key={product.id}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Products</h1>
      <div className="row">
      {cards}
      </div>
      
    </>
  )
}

export default App;
