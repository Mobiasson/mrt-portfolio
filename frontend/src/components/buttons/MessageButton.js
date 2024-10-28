import React from 'react';

const Button = ({ onClick, className, children }) => (
    <button onClick={onClick} className={className}>
        {children}
    </button>
);

const MessageButton = () => {
    const handleEmailClick = () => {
        window.location.href = 'mailto:youremail@example.com';
    };

    return (
        <Button className="msgBtn" onClick={handleEmailClick}>
            Send me a message
        </Button>
    );
};

export default MessageButton;
