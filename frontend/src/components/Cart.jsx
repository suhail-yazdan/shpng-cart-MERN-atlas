import { useState } from "react";
import "../styles/cartStyles.css"

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Cart = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {console.log("handle Close is working"); setShow(false)};
  const handleShow = () => setShow(true);

  const handleProceed = () => {
    handleClose();
  }

  return (
    <>
      <div className="cart d-flex align-items-center justify-content-center" onClick={handleShow}>
        <h3>
          My Cart
          <sup className="text-danger"> 
            {props.selectedProducts.reduce((total, product) => total + product.quantity, 0)}
          </sup>
        </h3>
      </div>

      <Modal show={show} onHide={handleClose} dialogClassName="cart-modal">
        <Modal.Header closeButton>
          <Modal.Title>Items in Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-box">
            <ul className="product-list list-group list-group-flush">
              {props.selectedProducts.map(item =>
                item.quantity > 0 && (                       
                  <li key={item.pid} className="list-group-item bg-secondary bg-opacity-10 me-4 mb-2">
                    {/* {item.quantity ? `${item.name}: ${item.quantity}` : ""} */}
                    {item.name}: {item.quantity}
                  </li>
                )
              )}
            </ul>
          </div>  
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleProceed}>
            Proceed
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Cart
