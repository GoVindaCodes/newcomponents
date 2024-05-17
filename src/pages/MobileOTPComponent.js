import React, { useState } from "react";
import Modal from "react-responsive-modal";

const MobileOTPComponent = () => {
    const [mobileNumber, setMobileNumber] = useState("");
    const [otp, setOtp] = useState("");

    const handleMobileNumberChange = (e) => {
        setMobileNumber(e.target.value);
    };

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement OTP verification logic here
    };

    return (
        <Modal>
            <h3>Mobile OTP Verification</h3>
            <form onSubmit={handleSubmit}>
                <input type="tel" value={mobileNumber} onChange={handleMobileNumberChange} placeholder="Enter Mobile Number" />
                <input type="text" value={otp} onChange={handleOtpChange} placeholder="Enter OTP" />
                <button type="submit">Verify</button>
            </form>
        </Modal>
    );
};

export default MobileOTPComponent;
