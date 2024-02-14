import React, { useState } from 'react'
import "../styles/cardStyles.css"
import axios from 'axios'

const ProductCard = (props) => {
    const [editMode, setEditMode] = useState(true)
    
    const [productName, setProductName] = useState(props.productDetail.name)
    const [productDescription, setProductDescription] = useState(props.productDetail.details)
    const [productPrice, setProductPrice] = useState(props.productDetail.price)

    const productID = props.productDetail._id

    const handleProductNameChange = (e) => {
        setProductName(e.target.value)
    }

    const handleProductDescriptionChange = (e) => {
        setProductDescription(e.target.value)
    }

    const handleProductPriceChange = (e) => {
        setProductPrice(e.target.value)
    }

    const handleOriginalData = () => {
        setProductName(props.productDetail.name)
        setProductDescription(props.productDetail.details)
        setProductPrice(props.productDetail.price)
    }  

    const updateProduct = async () => {
        const productData = {
            "name": productName,
            "details": productDescription,
            "price": productPrice
        }

        axios
            .put(`http://localhost:7786/api/products/${productID}`, productData)
            .then((response) => {
                console.log("Product updated successfully")
                props.updateProductList()
                setEditMode(!editMode)
            })
            .catch((error) => {
                console.log(error)
            })

    }

    

    return (
        <div className = {`card flex-row items-align-center justify-content-between p-3 mb-4 
            shadow-sm border-lg rounded-4 mx-3`}>
            {
                editMode? (
                    <>
                        <div className='w-50'>
                            <h5 className='m-0'> {props.productDetail.name} </h5>
                            <small className='m-0 text-small'>{props.productDetail.details}</small><br/>
                            <div className='badge rounded-pill text-bg-primary py-2 px-3 mt-2'>Rs. {props.productDetail.price}/- </div>
                        </div>
                    </>
                ):(
                    <>
                        <div className='w-75 d-flex flex-column'>
                            <form className='me-4`'>
                                <input type="text" 
                                    className='form-control py-1 px-2 w-75' 
                                    value={productName}
                                    onChange={handleProductNameChange}
                                    />

                                <textarea 
                                    className="form-control mt-2 py-1 px-2" 
                                    rows="3" 
                                    value={productDescription}
                                    onChange={handleProductDescriptionChange}
                                    >
                                </textarea>

                                <input type="text" 
                                    placeholder='Price' 
                                    className='form-control py-1 px-2 w-50 mt-2'
                                    onChange={handleProductPriceChange}
                                    value={productPrice} />
                            </form>
                        </div>
                    </>
                )
        
            }
        
            {
                editMode? (
                        <>
                            <div className='d-flex align-items-center'>
                                <button className='btn-secondary btn px-3 py-1 me-3' 
                                    onClick={() => setEditMode(!editMode)}>Edit</button>
                                    
                                <button className='bg-secondary btn btn-close p-3'
                                    onClick={props.deleteProduct}></button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='d-flex flex-column align-items-end justify-content-lg-center'>
                                <button className='btn-secondary btn px-3 py-1' 
                                    onClick={() =>{updateProduct()}}>Save</button>

                                <button className='btn-secondary btn px-3 py-1 mt-2' 
                                    onClick={() => {setEditMode(!editMode); handleOriginalData() }}>Cancel</button>
                            </div>
                        </>
                    )
            }
        </div>
    )
}

export default ProductCard
