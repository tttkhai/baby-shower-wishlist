import { useState } from "react";
import WishlistDetail from "./WishlistDetail";
import WishlistForm from "./WishlistForm";

export const WishList = () => {
    const [ wishList, setWishList ] = useState([])

    const updateWishlist = (input, previous) =>{
        if(!input) {
            setWishList(wishList.map((item) => previous.id === item.id ? { ...item, isEdit: !item.isEdit } : item))
            return
        }
 
        setWishList(wishList.map((item) => previous.id === item.id ? 
            {...item, value: input, isEdit: false } :
            {...item, isEdit: false}
        ))
    }

    const toggleEdit = (id) => {
        setWishList(wishList.map((item) => id === item.id ? { ...item, isEdit: !item.isEdit } : item))
    }

    const addWishlist = (item) => {
        if(!item) {
            return;
        }

        const id = wishList.length ? wishList.length + 1: 1;
        const newItem = {id, value: item, isEdit: false}

        setWishList([...wishList, newItem])
    }

    const deleteWishlist = (id) => {
        setWishList(wishList.filter((item) => id !== item.id))
    }

    return <div className='container'>
        <div className='row center'>
            <WishlistForm mode="add" handleSubmit={addWishlist}/>
            <WishlistDetail
                wishList={wishList}
                updateWishlist={updateWishlist}
                toggleEdit={toggleEdit}
                deleteWishlist={deleteWishlist}
            />
        </div>
    </div>
}