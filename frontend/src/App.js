import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Card from "./components/Card";
import Cart from "./components/Cart";
import Spinner from 'react-bootstrap/Spinner';

function App() {
  const [loading, setLoading] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([])
  const [products, setProducts] = useState([
    {
      pid: 1,
      name: "Strawberry Shake",
      details: "Finest Strawberries, Milk, Sugar",
      price: 149,
      quantity: 0
    },
    {
      pid: 2,
      name: "Chocolate Fantasy",
      details: "Brownie with chocolate sauce topped with Vanilla Ice cream",
      price: 249,
      quantity: 0
    },
    {
      pid: 3,
      name: "Mediterranean Delight",
      details: "Nuts and Dates from the soils of Algeria",
      price: 329,
      quantity: 0
    }
  ])

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:7786/api/products')
      .then(response => {
        const updatedProducts = response.data.map(product => ({
          ...product,
          pid: product._id,
          quantity:0
        }))

        setProducts(prevProducts => [...prevProducts, ...updatedProducts]);

        setLoading(false)

        // console.log("uniqueProducts", updatedProducts)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, [])


  const handleQuantityIncreased = (prod, e) => {
    e.stopPropagation();

    const productIndex = selectedProducts.findIndex((item) => item.pid === prod.pid);
    const isProductInList = selectedProducts.some((item) => item.pid === prod.pid);

    if(isProductInList) {
      setSelectedProducts((prevItems) =>
        prevItems.map((item, index) => {
          if (index === productIndex) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        })
      );
    }
  }

  const handleQuantityDecreased = (prod, e) => {
    e.stopPropagation();

    const productIndex = selectedProducts.findIndex((item) => item.pid === prod.pid);
    const isProductInList = selectedProducts.some((item) => item.pid === prod.pid);

    if(isProductInList) {
      setSelectedProducts((prevItems) =>
        prevItems.map((item, index) => {
          if (index === productIndex) {
            if(item.quantity > 0) item.quantity--;
            return item;
          } else {
            return item;
          }
        })
      );
    }
  }


  const handleSelectingCard = (prod) => {

    const isSelected = selectedProducts.some((items) => items.pid === prod.pid)

    if (!isSelected) {
      setSelectedProducts((prevItems) => {
        return [...prevItems, prod]
      });
    } else {
      setSelectedProducts((prevItems) => {
        return prevItems.filter((item) => item.pid !== prod.pid);
      });
    }
  }

  // {console.log("selected products", selectedProducts)}

  // {console.log("products", products)}

  return (
    <div className='main-container'>
      <header className='header' style={{"marginTop": "38px"}}>
        <div className='container d-flex justify-content-end align-items-center'>
            <Cart selectedProducts={selectedProducts} />
        </div>
      </header>
      
      <main style={{"marginTop": "100px"}}>
        <div className="container">
          <div className='row'>
            <div className='col-8 offset-2'>
              {loading && <Spinner />}
              {products.map((product) => (
                <Card
                  key = {product.pid}
                  productDetail = {product}
                  selectedProduct = {selectedProducts.find((item) => item.pid === product.pid)}
                  onQuantityIncreased={(prod, e) => handleQuantityIncreased(prod, e)}
                  onQuantityDecreased={(prod, e) => handleQuantityDecreased(prod, e)}
                  onCardSelecting={(prod) => handleSelectingCard(prod)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
