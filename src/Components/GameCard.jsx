import React from 'react'
import './GameCard.css'


const GameCard = (props) => {














    return(
        <div> 
            {props.game.name}
            <img className = 'gameimage' src = {props.game.background_image} alt = '' />
        </div>
        )
}

export default GameCard