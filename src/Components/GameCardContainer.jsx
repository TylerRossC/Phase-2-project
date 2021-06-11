import React, {useState, useEffect} from 'react'
import  './GameCardContainer.css'
import GameCard from './GameCard'
import WishlistGameCard from './WishlistGameCard'

const GameCardContainer = () => {


    const [games, setGames] = useState({})
    // const [url, setUrl] = useState('https://api.rawg.io/api/games?key=980882e9478c412e9c8438c57b103552')
    const [url, setUrl] = useState('https://api.rawg.io/api/games?key=980882e9478c412e9c8438c57b103552')
    //const [pageNum, setPageNum] = useState(1)
  
    useEffect( () => {
      fetch(url)
      .then(res => res.json())
      .then(data => setGames(data)) 
    }, [url]) // https://dmitripavlutin.com/react-useeffect-infinite-loop/#:~:text=useEffect(()%20%3D%3E%20%7B%20%2F%2F%20Infinite%20loop!,the%20side%2Deffect%20should%20run. explanation about the second arguement
    
    

    const handlePrevPage = () => {
        // setUrl(url - 1)
        setUrl(games.previous)
      }
    
    const handleNextPage = () => {
        // setUrl(url + 1)
        setUrl(games.next)
    }
    
   

    const renderGameCard = () => {
     return (Object.keys(games).length === 0) ? null : games.results.map( (game, idx) => {  //https://www.geeksforgeeks.org/how-to-check-an-object-is-empty-using-javascript/
        return <GameCard key={idx} game = {game} />
        }
     )
    }

    




      return (
        <div className="game-card-container">
        { renderGameCard() }  
        <button onClick={handlePrevPage}>Prev. Page</button> 
        <button onClick={handleNextPage}>Next Page</button>
        </div>
      );
    }
    
    export default GameCardContainer