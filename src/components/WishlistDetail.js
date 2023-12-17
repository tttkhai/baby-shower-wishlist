import React from 'react'
import Button from './Button';
import WishlistForm from './WishlistForm';

function WishlistDetail({wishList, updateWishlist, toggleEdit, deleteWishlist}) {
    const updateItem = (input, item) => {
        updateWishlist(input, item)
    }

    const deleteItem = (item) =>{
        deleteWishlist(item)
    }

    return (wishList.map((item) => 
        item.isEdit ? 
            <div key={item.id}><WishlistForm mode="edit" handleSubmit={updateItem} itemToEdit={item}/></div> :
            <div key={item.id}>
                {item.value}
                <Button buttonText="Edit" onClick={toggleEdit} item={item.id}/>
                <Button buttonText="Delete" onClick={deleteItem} item={item.id}/>
            </div>
    ));
}

export default WishlistDetail