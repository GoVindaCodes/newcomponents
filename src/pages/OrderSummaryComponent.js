import React from "react";

const OrderSummaryComponent = ({ productDetails, address, selectedPaymentMethod }) => {
    return (
        <div>
            <h3>Order Summary</h3>
            <div>
                <p>Product Details: {productDetails}</p>
                <p>Shipping Address: {address}</p>
                <p>Payment Method: {selectedPaymentMethod}</p>
            </div>
        </div>
    );
};

export default OrderSummaryComponent;
