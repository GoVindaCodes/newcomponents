import React, { useState } from "react";

const AddressEntryComponent = () => {
    const [address, setAddress] = useState("");

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <h3>Address Entry</h3>
            <form onSubmit={handleSubmit}>
                <textarea value={address} onChange={handleAddressChange} placeholder="Enter Address"></textarea>
                <button type="submit">Submit Address</button>
            </form>
        </div>
    );
};

export default AddressEntryComponent;
