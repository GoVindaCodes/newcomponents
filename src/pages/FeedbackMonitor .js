import React from "react";
import { useTranslation } from "react-i18next";
import { FiAlertCircle, FiCheckCircle } from "react-icons/fi";
import { FaStar } from "react-icons/fa"; 

const FeedbackMonitor = ({ reviews }) => {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">{t("Customer Feedback")}</h2>
            {reviews.map((feedback) => (
                <div
                    key={feedback.id}
                    className={`flex items-center justify-between p-4 rounded-lg shadow-md ${feedback.rating === 1 ? "bg-red-100" : "bg-green-100"
                        } mb-4`}
                >
                    <div className="flex items-center">
                        {feedback.rating === 1 ? (
                            <FiAlertCircle className="text-red-500 mr-2" />
                        ) : (
                            <FiCheckCircle className="text-green-500 mr-2" />
                        )}
                        <div className="flex items-center">
                            {/* Render stars based on rating */}
                            {Array.from({ length: 5 }, (_, index) => (
                                <FaStar
                                    key={index}
                                    className={`text-${feedback.rating === 1 ? "red" : "green"}-500`}
                                    // Set star to filled if index is less than rating, else outline
                                    fill={index < feedback.rating ? "currentColor" : "none"}
                                    stroke="currentColor"
                                />
                            ))}
                            {/* Display comment */}
                            <p className="ml-2">{feedback.comment}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeedbackMonitor;
