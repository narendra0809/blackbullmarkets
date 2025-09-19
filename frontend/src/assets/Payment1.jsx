import React from 'react'

function Payment1() {
     const paymentLogos = [
    { src: '../public/images/google-pay-payment-method 1.png', alt: 'Visa' },
    { src: '../public/images/Local_banktransfer-payment-method 1.png', alt: 'Mastercard' },
    { src: '../public/images/Neteller-payment-method 1.png', alt: 'Apple Pay' },
    { src: '../public/images/skrill-payment-method 1.png', alt: 'Google Pay' },
    { src: '../public/images/google-pay-payment-method 1.png', alt: 'Bank Transfer' },
    { src: '../public/images/Local_banktransfer-payment-method 1.png', alt: 'Crypto' },
    { src: '../public/images/Neteller-payment-method 1.png', alt: 'Neteller' },
    { src: '../public/images/skrill-payment-method 1.png', alt: 'Skrill' },
    { src: '../public/images/google-pay-payment-method 1.png', alt: 'Bank Transfer Local' },
  ];
  return (
    <div className="bg-light py-4 border-top border-bottom">
      <div className="container">
        <div className="row justify-content-center g-4 align-items-center g-3">
          {paymentLogos.map((logo, index) => (
            <div key={index} className="col-auto">
              <img
                src={logo.src}
                alt={logo.alt}
                className="img-fluid"
                style={{ maxHeight: '40px', maxWidth: '120px' }} // Adjust size as needed
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Payment1