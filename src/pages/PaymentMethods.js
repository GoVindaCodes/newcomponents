import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Modal, ModalBody, ModalFooter } from "@windmill/react-ui";
import { FaCreditCard, FaPaypal, FaMoneyCheckAlt } from "react-icons/fa";

const PaymentMethods = ({ isOpen, onClose, onSetDefault }) => {
    const { t } = useTranslation();
    const paymentMethods = [
        {
            id: 1, type: "Credit Card", details: "Pay with your credit card", icon:
                <div className="text-blue-500">
                    <FaCreditCard color="#002bff" />
                </div>
        },
        { id: 2, type: "PayPal", details: "Pay with PayPal", icon: <FaPaypal color="#007fff" /> },
        { id: 3, type: "Bank Transfer", details: "Transfer money directly from your bank account", icon: <FaMoneyCheckAlt color="#007bff" /> }
    ];

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalBody className="text-center custom-modal px-8 pt-6 pb-4">
                <h2 className="text-xl font-medium mb-2">
                    {t("PaymentMethodsModalTitle")}
                </h2>
                {paymentMethods.map((method, index) => (
                    <div key={index} className="mb-6">
                        <div className="flex items-center justify-between border-b pb-2">
                            <div className="flex items-center">
                                <div className="mr-2 text-xl icon-color">{method.icon}</div>
                                <div>
                                    <h3 className="text-lg font-semibold">{method.type}</h3>
                                    <p className="text-gray-600">{method.details}</p>
                                </div>
                            </div>
                            <Button size="small" onClick={() => onSetDefault(method.details)}>
                                {t("Select")}
                            </Button>
                        </div>
                    </div>
                ))}
            </ModalBody>

            <ModalFooter className="justify-center">
                <Button layout="outline" onClick={onClose}>
                    {t("modalKeepBtn")}
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default PaymentMethods;
