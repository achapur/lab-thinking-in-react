// App.js

import './App.css';
import ProductsPage from './components/ProductsPage';
import axios from 'axios';
import { useState,useEffect } from "react";

function App() {
  const [data, setData] = useState({});
  const [listCharacters, setListCharacters] = useState({});
  const [inStock, setInStock] = useState({});
  const handleSearch = (event) => setFiltro(event.target.value);

  return (
    <div className="App">
      <ProductsPage />
    </div>
  );
}

export default App;