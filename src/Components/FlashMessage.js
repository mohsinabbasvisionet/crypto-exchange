import React from 'react';

const FlashMessage = ({ message }) => {
    return <div className="p-3 mb-2 bg-danger text-white">
                <div className="flash-message">{message}</div>
           </div>;
};

export default FlashMessage;