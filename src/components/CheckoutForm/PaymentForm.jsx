import React, { useState } from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { Link } from 'react-router-dom';


import Review from './Review';


const PaymentForm = ({ checkoutToken, nextStep, backStep, shippingData, onCaptureCheckout }) => {
  {/*
  const handleSubmit = async (event, elements) => {
    event.preventDefault();

    

    const cardElement = elements.getElement(CardElement);

   const orderData = {
    line_items: checkoutToken.live.line_items,
    customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
  
   };

   onCaptureCheckout(checkoutToken.id, orderData);

   nextStep();

  };
*/}
  const [popup, setPopup] = useState(true);
  const submit =()=>{
    setPopup(false);
    alert("Order Successfully placed");
  }
  return (
    <>
      {popup ?
        <div>


          <Review checkoutToken={checkoutToken} />
          <Divider />

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="outlined" onClick={backStep}>Back</Button>
<Link to='/'>

            <Button onClick={submit}  variant="contained" color="primary">
              Pay {checkoutToken.live.subtotalformatted_with_symbol}
            </Button>
</Link>
          </div>
        </div>
        : ""}
    </>
  );
};

export default PaymentForm;