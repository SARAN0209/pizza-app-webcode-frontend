import React, { useState } from "react";
import { Link } from "react-router-dom";

function Payment() {

    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (amount === '') {
            alert("Please enter amount")
        } else {
            var options = {
                key:"",
                key_secret:"",
                amount: amount*100,
                currency:"INR",
                name :"Pizza_App",
                discription:"For testing purpose",
                handler : function(response){
                    alert(response.razorpay_payment_id)
                },
                prefill:{
                    name:"saran",
                    email:"saran@gmail.com",
                    contact: "987654321",
                },
                note:{
                    address:"Razorpay corporate office",
                },
                theme:{
                    color:"skyblue"
                }
                
            };
            var pay = new window.Razorpay(options);
            pay.open();

        }
    }


    return (
        <div>
        <div style={{ margin: "100px", marginLeft: "500px" }}>
            <div className="col-md-6">
                <div class="card w-75 px-4 mx-auto">
                    <div class="card-body">
                        <h5 class="card-title text-center py-2 mb-3">PAYMENT GATEWAY</h5>
                        <input type="number" placeholder="Enter your payment" class="form-control mb-3" value={amount} onChange={(e) => setAmount(e.target.value)} />
                    </div>
                    <div className="text-center">
                        <button onClick={handleSubmit} class="btn btn-danger my-3 w-100">
                            PROCEED TO PAYMENT
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
       
        <div className="text-center">
        <div style={{marginBottom:"00px"}}>
                        <button  class="btn btn-danger my-1 w-50">
                            <Link to="/checkout">CONFRIM TO ADDRESS</Link>
                        </button>
                    </div>
                    </div>
       </div>
       

    )
}

export default Payment;