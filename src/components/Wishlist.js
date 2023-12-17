import { useState } from "react";
import WishlistDetail from "./WishlistDetail";
import WishlistForm from "./WishlistForm";

export const WishList = () => {
    const [ wishList, setWishList ] = useState([])

    const updateWishlist = (wishListId, value) =>{
        if(wishList.value) {
            return;
        }
        const updateWishlist = wishList.find((item) => wishListId === item.id)
        if (updateWishlist) {
            updateWishlist.value = value 
            setWishList(wishList)
            console.log(`updateWishlist ${JSON.stringify(wishList)}`)
        }
    }

    const addWishlist = (item) => {
        if(!item) {
            return;
        }

        const id = wishList.length ? 1: wishList.length + 1;
        const newItem = {id, value: item}

        setWishList([...wishList, newItem])
        console.log(`addWishlist ${JSON.stringify(wishList)}`)
    }

    return <div className='container'>
        <div className='row center'>
            <WishlistForm addWishlist={addWishlist} />
            <WishlistDetail wishList={wishList} updateWishlist={updateWishlist} />
        </div>
    </div>
}