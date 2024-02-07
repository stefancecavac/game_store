import '../css/home.css'
import {useGameContext} from '../hooks/useGamehook'
import { useEffect } from 'react'


import Category from "../components/category"
import GameCard from '../components/gameCard'


const Home = () => {
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
                <GameCard key={game._id} game={game}></GameCard>
            ))}
        </div>

        
      
        </div>
    )
}
export default Home