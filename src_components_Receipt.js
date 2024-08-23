import React from 'react';
import './Receipt.css';

function Receipt() {
  return (
    <div className="receipt">
      <div className="receipt-title">Receipt</div>
      <p>Thank you for using PublixPassport! Below is your summary:</p>
      {/* Additional receipt details here */}
    </div>
  );
}

export default Receipt;
