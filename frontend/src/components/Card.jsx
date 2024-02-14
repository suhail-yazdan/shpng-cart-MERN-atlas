import React, {useState} from 'react'
import Counter from './Counter'
import "../styles/cardStyles.css"

const Card = ({ productDetail, onCardSelecting, onQuantityIncreased, onQuantityDecreased, selectedProduct }) => {
  const [cardSelected, setCardSelected] = useState(false)

  return (
    <div className = {
          `${cardSelected ? 'selected' : 'deselected'} card flex-row items-align-center hand-cursor 
          justify-content-between p-3 mb-4 
          shadow-sm border-lg rounded-4 mx-3`}
          onClick={() => {
            setCardSelected(!cardSelected);
            onCardSelecting(productDetail);
          }}
    >
      <div className='w-50'>
        <h4 className='m-0'> {productDetail.name} </h4>
        <p className='m-0'>{productDetail.details}</p>
        <div className='badge rounded-pill text-bg-primary py-2 px-3 mt-2'>Rs. {productDetail.price}/- </div>
      </div>

      {/* {console.log("cardSelected: ", cardSelected)} */}

      {console.log('selectedProduct', selectedProduct)}

      {cardSelected && (
        <Counter 
          product = {productDetail}
          selectedProduct = {selectedProduct}
          onIncrement={onQuantityIncreased}
          onDecrement={onQuantityDecreased} 
          onCardSelecting={onCardSelecting}
        />
      )}
    </div>
  )
}

export default Card
