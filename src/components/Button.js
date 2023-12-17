import React from 'react'

function Button({buttonText, onClick, item}) {
    const handleClick = () => {
        onClick(item);
    };

    return <button onClick={handleClick}>{buttonText}</button>;
}

export default Button