import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavB from './assets/components/NavB';
import Products from './assets/components/Products';
import Error from './assets/components/Error';
import Cart from './assets/components/Cart';
import Dashboard from './assets/components/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <NavB/>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
