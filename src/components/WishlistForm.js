import React, { useState, useRef } from 'react'

function WishlistForm({addWishlist}) {
    const [ input, setInput ] = useState('')
    const inputRef = useRef(null);

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addWishlist(input);
        setInput('')
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input 
                placeholder='Type your wishlist here'
                onChange={handleChange}
                name='text'
                ref={inputRef}
                value={input}
            />
        </form>
</div>
    )
}

export default WishlistForm