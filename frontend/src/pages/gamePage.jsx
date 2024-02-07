import { useParams } from "react-router-dom"
import { useGameContext } from "../hooks/useGamehook"
import { useEffect } from "react"
import '../css/gamePage.css'

const GamePage = () => { 

    const {singleGame , dispatch} = useGameContext()
    const {gameId} = useParams()
    
    useEffect(() => {
        const fetchGames = async() => {
                const response = await fetch(`http://localhost:4000/api/games/${gameId}`,{
                    
                })
                const json = await response.json()
                if(response.ok){
                    dispatch({type: 'SET_GAME' ,payload:json})
                }
            
        
        }
        fetchGames()
    },[dispatch ,gameId])

    return(
        <div className="gamepage">
                {singleGame && (
                    <>

                    <div className="image">
                        <img src='' alt='image'></img>
                    </div>
                    <h2>{singleGame.title}</h2>

                    <div className="information">
                    <p>{singleGame.genre}</p>
                    <p>{singleGame.type}</p>
                    <p>{singleGame.platform}</p>
                    </div>
                    <div className="addtocart">
                    <p>{singleGame.price}</p>
                    </div>


                    <p>{singleGame.description}</p>
                  


                    </>



                )}
        </div>
    )
}

export default GamePage