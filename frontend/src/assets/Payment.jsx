import React from 'react'
import './Payment.css'
function Payment() {
  return (
    <div className="payment-container">
      <h2 className="title">
        Market.Trad <span>Payment Accept</span>
      </h2>

      <div className="payment-grid">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" />
        <img src="../public/images/vector.png" alt="MasterCard" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" className="small-logo"/>
        <img src="../public/images/google-pay-payment-method 1.png" alt="Google Pay" className="small-logo"/>
        <img src="../public/images/Neteller-payment-method 1.png" alt="Bank Transfer" />
        <img src="../public/images/google-pay-payment-method 1.png"alt="Crypto" />
        <img src="../public/images/skrill-payment-method 1.png" alt="Neteller" />
        <img src="../public/images/google-pay-payment-method 1.png" alt="Skrill" />
        <img src="../public/images/Neteller-payment-method 1.png" alt="Local Bank Transfer" />
        <img src="../public/images/vector.png"  alt="Local Bank Transfer" />
      </div>
    </div>
  )
}

export default Payment