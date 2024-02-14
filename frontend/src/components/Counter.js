import "../styles/counterStyles.css"

export default function Counter(props) {
    return (
      <div className="counter d-flex flex-nowrap align-items-center justify-content-end">
        <div className="mx-1">Quantity:</div>  
        <div className={`${props.selectedProduct.quantity === 0 ? "bg-warning text-black" : "bg-primary"} badge mx-1 p-2`}>
          {props.selectedProduct.quantity === 0 ? "Zero": props.selectedProduct.quantity}
        </div>
        <button className="btn btn-secondary mx-1" onClick={(e) => props.onIncrement(props.selectedProduct, e)}>
          +
        </button>
        <button className="btn btn-secondary mx-1" onClick={(e) => props.onDecrement(props.selectedProduct, e)}>
          -
        </button>
      </div>
    );
}
