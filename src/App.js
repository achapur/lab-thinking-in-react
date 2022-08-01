// App.js

import './App.css';
import ProductsPage from './components/ProductsPage';
import axios from 'axios';
import { useState,useEffect } from "react";
import data from './data.json'
import ProductTable from './components/ProductsPage/ProductTable/ProductTable';


function App() {
  const [data, setData] = useState({});
  const [listCharacters, setListCharacters] = useState({});
  const [inStock, setInStock] = useState({});
  const handleSearch = (event) => setFiltro(event.target.value);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true); // ajax request after empty completing

    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  useEffect(() => {
    axios.get((data)=>{
      .then((result) => {
        <ProductTable/>
      })
      .catch((err) => {
        console.log('error',err)
      });
    })
      });
  }, []);
  return (
    <div className="App">
      <ProductsPage />
    </div>
  );
}

export default App;