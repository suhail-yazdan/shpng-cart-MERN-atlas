import "./styles/offers.css"

const Offers = () => {
  return (
    <div className="offers-container d-flex justify-content-center align-items-center">
        <div className="d-flex flex-column align-items-center mx-3">
            <div className="offer position-relative rounded-4">
                <div className="price-tag position-absolute rounded-circle d-flex justify-content-center align-items-center">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <div>Rs.150</div> <div>Off</div>
                    </div>
                </div>

                <div className="offer-image rounded-4 overflow-hidden">
                    <img 
                        className="img-fluid w-100 h-100" alt="offer-01"
                        src="https://img.freepik.com/free-photo/woman-holds-fashion-shopping-bag-beauty_1150-13673.jpg?w=900&t=st=1701166645~exp=1701167245~hmac=d2877115774aa5df60d4bd27b14453cafe57b98294de809a92228ba0364cb9e1"
                    />
                </div>

                <div className="offer-details p-3 mt-3">
                    <h3>Title</h3>
                    <p>Lorem ipsum dollor set a met Lorem ipsum dollor </p>
                </div>
            </div>

            <a href="/" className="offerLink d-flex justify-content-center align-items-center mt-3 rounded-pill">Grab the offer</a>
        </div>

        <div className="d-flex flex-column align-items-center mx-3">
            <div className="offer position-relative rounded-4">
                <div className="price-tag position-absolute rounded-circle d-flex justify-content-center align-items-center">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <div>Rs.150</div> <div>Off</div>
                    </div>
                </div>

                <div className="offer-image rounded-4 overflow-hidden">
                    <img 
                        className="img-fluid w-100 h-100" alt="offer-02"
                        src="https://img.freepik.com/free-vector/seasonal-sale-discounts-presents-purchase-visiting-boutiques-luxury-shopping-price-reduction-promotional-coupons-special-holiday-offers-vector-isolated-concept-metaphor-illustration_335657-2766.jpg?w=740&t=st=1701166914~exp=1701167514~hmac=27d8dc6f5dfad595fa0b5345fe6b7e05d16ee0de3760c35a1982746879d00106"
                    />
                </div>

                <div className="offer-details p-3 mt-3">
                    <h3>Title</h3>
                    <p>Lorem ipsum dollor set a met Lorem ipsum dollor </p>
                </div>
            </div>

            <a href="/" className="offerLink d-flex justify-content-center align-items-center mt-3 rounded-pill">Grab the offer</a>
        </div>

        <div className="d-flex flex-column align-items-center mx-3">
            <div className="offer position-relative rounded-4">
                <div className="price-tag position-absolute rounded-circle d-flex justify-content-center align-items-center">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <div>Rs.150</div> <div>Off</div>
                    </div>
                </div>

                <div className="offer-image rounded-4 overflow-hidden">
                    <img 
                        className="img-fluid w-100 h-100" alt="offer-03"
                        src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=1060&t=st=1701167004~exp=1701167604~hmac=9ef066e9af78d5c991028477ad4c3ba2a4a6dece4f4b22c003cfaf70e0e31333"
                    />
                </div>

                <div className="offer-details p-3 mt-3">
                    <h3>Title</h3>
                    <p>Lorem ipsum dollor set a met Lorem ipsum dollor </p>
                </div>
            </div>

            <a href="/" className="offerLink d-flex justify-content-center align-items-center mt-3 rounded-pill">Grab the offer</a>
        </div>
    </div>
  )
}

export default Offers