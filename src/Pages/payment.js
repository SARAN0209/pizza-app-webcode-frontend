import React from "react";
import { Link } from "react-router-dom";
import StripeCheckout from 'react-stripe-checkout';

function Payment() {

    const onToken = (token) => {
        console.log(token)
    }

    return (
        <div>
            <div style={{ margin: "100px", marginLeft: "500px" }}>
                <div className="col-md-6">
                    <div class="card w-75 px-4 mx-auto">
                        <div class="card-body">
                            <h5 class="card-title text-center py-2 mb-3">PAYMENT GATEWAY</h5>
                            
                            <input type="number" placeholder="Enter your payment" class="form-control mb-3" />
                            
                        </div>
                        <div className="text-center">
                            <button class="btn btn-danger my-3 w-100">
                            <StripeCheckout
                                token={onToken}
                                name="PAYMENT GATEWAY"
                                currency="INR"
                                stripeKey="pk_test_51MbGIeSDkbtMIT5KRHIf5NwmxrfcHiZ3TA2tK54UdRUpxqJPo5hGqHJqD0PQZJ20ARBehZUjQsHM71YoQAvtaDH500wlFnGpfa"
                            />
                            </button>
                        </div>
                    </div>
                </div>

            </div>


            <div className="text-center">
                <div style={{ marginBottom: "00px" }}>
                    <button class="btn btn-danger my-1 w-50">
                        <Link to="/checkout">CONFRIM TO ADDRESS</Link>
                    </button>
                </div>
            </div>
        </div>


    )
}

export default Payment;