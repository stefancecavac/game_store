import '../css/gameCard.css'

const GameCard = ({game}) => {

    return(
        <div className="gameCard">
            <div className='imagecontainer'>
                <img src='' alt='image'></img>
            </div>
            <h3>{game.title}</h3>
            <div className='gameinfo'>
                <p>{game.genre}</p>
                <p>{game.type}</p>
                <p>{game.platform}</p>
            </div>
            <p className='price'>{game.price}</p>
        </div>  
    )
}

export default GameCard