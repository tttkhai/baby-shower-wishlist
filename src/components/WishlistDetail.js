import React, { useEffect, useState } from 'react'
import Button from './Button';
import WishlistForm from './WishlistForm';

function WishlistDetail({wishList}) {

    const [ edit, setEdit ] = useState(false)
    useEffect(() => {
        console.log(`WishlistDetail ${JSON.stringify(wishList)}`);
    });

    return (wishList.map((item) => 
        edit.id ? <WishlistForm /> : <div key={item.id}> {item.value} <Button onClick={() => setEdit(true)}/></div>
    ));
}

export default WishlistDetail