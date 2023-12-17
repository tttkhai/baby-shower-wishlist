import React, { useState, useRef, useEffect } from 'react'

function WishlistForm({mode, handleSubmit, itemToEdit}) {
    const [ input, setInput ] = useState('')
    const inputRef = useRef(null);

    useEffect(()=> {
        inputRef.current.focus()
    })

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(input, itemToEdit);
        setInput('')
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input 
                    placeholder='Type your wishlist here'
                    onChange={handleChange}
                    name='text'
                    ref={inputRef}
                    value={input}
                />
                <button type='submit'>{mode === 'edit' ? 'Update' : 'Add'}</button>
            </form>
        </div>
    )
}

export default WishlistForm