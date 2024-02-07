import { createContext, useReducer } from "react";



export const GameContext = createContext()


export const gameReducer = (state, action) => {

    switch (action.type) {
        case "SET_GAMES":
            return {
                games: action.payload
            }
            case "SET_GAME":
            return {
                singleGame: action.payload
            }
        case 'UPDATE_GAME':
            return {
                

            }
        case 'POST_GAME':
            return {
                games: [action.payload, ...state.games]
            }
        case 'DELETE_GAME':
            return {
                games: state.games.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state
    }
}


export const GameContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(gameReducer, {
        games: []
    })
    console.log(state)
    return (
        <GameContext.Provider value={{ ...state, dispatch }}>
            {children}
        </GameContext.Provider>
    )
}
