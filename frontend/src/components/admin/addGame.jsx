import { useState } from "react"
import {useUserContext} from '../../hooks/useUserHook'
import {useGameContext} from '../../hooks/useGamehook'

const AddGame = () => {
    const [title, setTitle] = useState('')
    const [description , setDescription] = useState('')
    const [genre , setGenre] = useState('')
    const [type , setType] = useState('')
    const [platform , setPlatform] = useState('')
    const [price , setPrice] = useState()

    const{user} = useUserContext()
    const {dispatch} = useGameContext()
    console.log(user)
    const handleAdd = async(e) => {
        e.preventDefault()
        const response = await fetch(`http://localhost:4000/api/games`, {
            method: 'POST',
            body: JSON.stringify({title, description, genre,type,platform,price}),
            headers:{
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json',
            }
        })
        const json = await response.json()

        if(response.ok){
            dispatch({type: 'POST_GAME' , payload:json})
        }
    }


    return (

        <div className="addgame">
            <form onSubmit={handleAdd}>
                <h2>add game:</h2>

                <label>game title</label>
                <input type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={ title}></input>

                <label>description</label>
                <input type="text"
                    onChange={(e) =>setDescription (e.target.value)}
                    value={ description}></input>

                <label>genre</label>
                <select
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                    >
                        <option value=''>select genre:</option>
                        {['action' , 'adventure' , 'rpg' , 'arcade' , 'fighting' , 'racing'].map((genre) => (

                            <option key={genre} value={genre}>{genre}</option>
                        )
                        )}
                    </select>

                <label>type</label>
                <input type="text"
                    onChange={(e) => setType(e.target.value)}
                    value={ type}></input>

                <label>platform</label>
                <input type="text"
                    onChange={(e) => setPlatform(e.target.value)}
                    value={ platform}></input>

                <label>price</label>
                <input type="text"
                    onChange={(e) =>setPrice (e.target.value)}
                    value={ price}></input>
                
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default AddGame