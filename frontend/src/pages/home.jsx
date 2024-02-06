import '../css/home.css'
import {useGameContext} from '../hooks/useGamehook'
import { useEffect } from 'react'
import {useUserContext} from '../hooks/useUserHook'

import Category from "../components/category"
import GameCard from '../components/gameCard'


const Home = () => {
    const {games , dispatch} = useGameContext()
    const {user} = useUserContext()
    
    useEffect(() => {
        const fetchGames = async() => {
            if(!user){
               return  console.log('not loged in')
            }
          
                const response = await fetch(`http://localhost:4000/api/games/`,{
                    headers: {
                        'Authorization': `Bearer ${user.token}`,
                    }
                })
                const json = await response.json()
                if(response.ok){
                    dispatch({type: 'SET_GAMES' ,payload:json})
                }
            
        
        }
        fetchGames()
    },[dispatch,user])

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