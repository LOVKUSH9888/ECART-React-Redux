import 'bootstrap/dist/css/bootstrap.min.css';

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

  return (
    <>
      <h1>Products</h1>
      
    </>
  )
}

export default App;
