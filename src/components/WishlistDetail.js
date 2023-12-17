import React from 'react'
import Button from './Button';
import WishlistForm from './WishlistForm';

function WishlistDetail({wishList, updateWishlist, toggleEdit}) {
    const update = (input, item) => {
        updateWishlist(input, item)
    }

    return (wishList.map((item) => 
        item.isEdit ? 
            <div><WishlistForm mode="edit" handleSubmit={update} itemToEdit={item}/></div> :
            <div key={item.id}>
                {item.value}
                <Button buttonText="Edit" mode="edit" onClick={() => toggleEdit(item.id)}/>
            </div>
    ));
}

export default WishlistDetail