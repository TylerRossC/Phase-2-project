import React from 'react'
import './GameCard.css'
// import ListButton from './ListButton'


const GameCard = (props) => {


const handleAddToWishlist = () => {
   const configObj = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(props.game)
    }
    fetch('http://localhost:3001/wishlistGames', configObj)
    .then(res => res.json())
    .then(data => console.log(data))
}











    return(
        <div> 
            {props.game.name}
            <img className = 'gameimage' src = {props.game.background_image} alt = '' />
            <button onClick = {handleAddToWishlist} className = 'add-to-wishlist'>Add to Wishlist</button>
            {/* <ListButton onClick = {handleAddToWishlist} class = 'add-to-wishlist' btnText = 'Add to Wishlist' /> */}
            
        </div>
        )
}

export default GameCard