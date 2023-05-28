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
    <div className="col-md-3 text-center" key={product.id} style={{marginBottom: '10px'}}>
    <Card style={{ width: '18rem' }} >
    <div className="text-center">
      <Card.Img variant="top" src={product.image} style={{width: '100px', height: '100px'}}/>
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
        {product.price}
        </Card.Text>
        <Button variant="primary ">Add To Cart</Button>
      </Card.Body>
      
    </Card>
    </div>
  ));
                                                                
  return (
    <>
      <h1 style={{textAlign: 'center'}}>Product Hub</h1>
      <div className="row">
      {cards}
      </div>
      
    </>
  )
}

export default App;
