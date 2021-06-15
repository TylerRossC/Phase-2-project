import React from 'react'
import './GameCard.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';
// import {handleRemoveFromWishlist} from './WishlistGameCard'
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

const btnText = () => {
  return  props.remove ? "Remove" : "Add to Wishlist"
}



    
    return(
    <div class = "card-container">
        <MDBCard class = "card" style={{ maxWidth: '22rem' }}>
            <MDBCardImage src = {props.game.background_image} position='top' alt='...' />
            <MDBCardBody>
                <MDBCardTitle class = "game-title"> {props.game.name} </MDBCardTitle>
                    <MDBCardText>
                        These are cards that show you games and their information.
                    </MDBCardText>
                    <button onClick = {props.remove ? () => {props.remove(props.game.id)} : handleAddToWishlist}>{btnText()}</button>
            {/* <button onClick = {handleAddToWishlist} class = 'add-to-wishlist' >Add to Wishlist</button> */}
            </MDBCardBody>
        </MDBCard>
    </div>
        )
}

export default GameCard