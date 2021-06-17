import React, {useState, useEffect} from 'react'
// import WishlistGameCard from './WishlistGameCard'
import GameCard from './GameCard'
import './Wishlist.css'
// import ListButton from './ListButton'





const Wishlist = () => {


    const [wishlistGames, setWishlistGames] = useState([])

    useEffect( () => {
        fetch('http://localhost:3001/wishlistGames')
        .then(res => res.json())
        .then(data => setWishlistGames(data))
    }, [])

    const renderWishlistGameCard = () => {
        return (wishlistGames.length === 0) ? null : wishlistGames.map( (game, idx) => {  
            return <GameCard key={idx} game = {game} remove = {removeFromWishlist} />
           }
        )
    }


    const removeFromWishlist = (id) => {
        // Update db.json back end
        const configObj = {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            }
        }
        fetch(`http://localhost:3001/wishlistGames/${id}`, configObj)

        // Update user interface (DOM)
        updateWishList(id)
    }
    
    const updateWishList = (id) => {
        console.log('removed')
        const updatedWishlistGames = wishlistGames.filter((game) => {
            return  id !== game.id
        })

        setWishlistGames(updatedWishlistGames)
    }








    return(
        <div className = "wishlist-container">
            <h1>Wishlist</h1>
            {renderWishlistGameCard()}
        </div>
        )
}

export default Wishlist