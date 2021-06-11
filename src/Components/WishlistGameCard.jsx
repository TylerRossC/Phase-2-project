import React from 'react'
// import ListButton from './ListButton'


const WishlistGameCard = (props) => {


   
const handleRemoveFromWishlist = () => {
    props.remove(props.game.id)
}








    return(
        <div> 
            {props.game.name}
            <img className = 'gameimage' src = {props.game.background_image} alt = '' />
            <button onClick = {handleRemoveFromWishlist} className = 'add-to-wishlist'>Remove</button>
            {/* <ListButton onClick = {handleAddToWishlist} class = 'add-to-wishlist' btnText = 'Add to Wishlist' /> */}
             
        </div>
        )
}

export default WishlistGameCard