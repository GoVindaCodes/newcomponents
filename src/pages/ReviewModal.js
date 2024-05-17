import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Modal, ModalBody, ModalFooter } from "@windmill/react-ui";
import ReviewForm from "./ReviewForm";

const ReviewModal = ({ isOpen, onClose, onSubmit }) => {
    const { t } = useTranslation();
    const [submitted, setSubmitted] = useState(false);

    const handleReviewSubmit = (formData) => {
        onSubmit(formData);
        setSubmitted(true);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalBody className="text-center custom-modal px-8 pt-6 pb-4">
                <h2 className="text-xl font-medium mb-2">
                    {t("WriteReviewModalTitle")}
                </h2>
                {isOpen && !submitted && <ReviewForm onSubmit={handleReviewSubmit} />}
                {submitted && <p>{t("ReviewSubmittedMessage")}</p>}
            </ModalBody>

            <ModalFooter className="justify-center">
                <Button layout="outline" onClick={onClose}>
                    {t("modalKeepBtn")}
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default ReviewModal;
