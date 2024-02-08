import { useEffect } from "react"
import { useGameContext } from "../hooks/useGamehook"
import Category from "./category"
import GameCard from "./gameCard"
import { Link } from "react-router-dom"

const AllGames = () => {
    const {games , dispatch} = useGameContext()
    
    
    useEffect(() => {
        const fetchGames = async() => {
                const response = await fetch(`http://localhost:4000/api/games/`,{
                    
                })
                const json = await response.json()
                if(response.ok){
                    dispatch({type: 'SET_GAMES' ,payload:json})
                }
            
        
        }
        fetchGames()
    },[dispatch])

    return(
        <div className="home">
        <Category></Category>
        
        <div className='content'>
            {games && games.map((game) => (

               <Link to={`/${game._id}`} key={game._id}><GameCard  game={game}></GameCard></Link> 
            ))}
        </div>

        
      
        </div>
    )
}

export default AllGames