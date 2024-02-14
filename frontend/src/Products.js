import { useEffect, useState } from "react"
import "./styles/products.css"
import ProductCard from "./components/ProductCard";
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios'

const Products = () => {
  // display products
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([])

  // save a product
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const updateProductList = () => {
    // updating the product list
    axios.get('http://localhost:7786/api/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Saving product to the database
    const data = {
      "name": productName,
      "details": productDescription,
      "price": productPrice
    }

    axios
      .post('http://localhost:7786/api/products', data)
      .then(() => {
        setLoading(false);
         
        updateProductList();

      })
      .catch((error) => {
        console.log(error)
      })

    // Reset the form fields
    setProductName('');
    setProductDescription('');
    setProductPrice('');
  };

  

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:7786/api/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false); 
      })
      .catch((error) =>{
        console.log(error);
        setLoading(false); 
      })
  }, [])

  const deleteProduct = (id) => {
    console.log(id)
    
    axios
      .delete(`http://localhost:7786/api/products/${id}`)
      .then(() => {
        // updating the product list
        axios.get('http://localhost:7777/api/products')
        .then(response => {
          setProducts(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  return (
    <>
      <div className="add-products-container">
        <div className="input-card">
          <div className="card_title">
            <h1>Add a Product</h1>
          </div>

          <div className="form">
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                value={productName} 
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Product Name" 
              />

              <textarea
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                placeholder="Product Description"
                rows="4"
              />

              <input 
                type="text" 
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)} 
                placeholder="Price"
              />

              <button type="submit">Add Your Product</button>
            </form>
          </div>

          <div className="card_terms">
              <input type="checkbox" name="" id="terms" /> <span>I have read and agree to the <a href="/">Terms of Service</a></span>
          </div>
        </div>

        <div className="my-5 products">
          <div className="card_title">
            <h1>Current Products list</h1>
          </div>
          
          <div className="products-list">
            {loading && <div className="text-center"><Spinner /></div>}
            {
              products.map((product) => {
                return(
                  <ProductCard 
                    key = {product._id}
                    productDetail = {product}
                    deleteProduct = {() => deleteProduct(product._id)}
                    updateProductList={updateProductList}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Products



