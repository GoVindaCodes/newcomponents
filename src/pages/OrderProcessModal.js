import React from "react";
import { Modal, ModalBody, ModalFooter, Button } from "@windmill/react-ui";
import MobileOTPComponent from "";
import AddressEntryComponent from "./AddressEntryComponent";
import PaymentMethods from "./PaymentMethods";
import OrderSummaryComponent from "./OrderSummaryComponent";

const OrderProcessModal = ({ isOpen, onClose }) => {
    return (
        <div isOpen={isOpen} onClose={onClose}>
            <div className="text-center custom-modal px-8 pt-6 pb-4">
                <h2 className="text-xl font-medium mb-2">Order Process</h2>
                <div className="mb-6">
                    <MobileOTPComponent />
                </div>
                <div className="mb-6">
                    <AddressEntryComponent />
                </div>
                <div className="mb-6">
                    <PaymentMethods />
                </div>
                <div className="mb-6">
                    <OrderSummaryComponent />
                </div>
            </div>

            <ModalFooter className="justify-center">
                <Button onClick={onClose}>Close</Button>
            </ModalFooter>
        </div>
    );
};

export default OrderProcessModal;
