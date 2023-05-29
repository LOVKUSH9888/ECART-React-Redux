import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './assets/components/Home';
import Products from './assets/components/Products';
import Error from './assets/components/Error';
import Cart from './assets/components/Cart';
import Dashboard from './assets/components/Dashboard';
import MainLayout from './assets/components/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
