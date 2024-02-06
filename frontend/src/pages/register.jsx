import { useState } from "react"
import { useUserContext } from "../hooks/useUserHook"
import '../css/register.css'

const Register = () => {
    const{dispatch} = useUserContext()

    const [username , setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error , setError] = useState(null)

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`http://localhost:4000/api/auth/register`, {
                method: 'POST',
                body: JSON.stringify({ username, email, password }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }

            if(response.ok){
                dispatch({type:"LOGIN" , payload:json})
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (

        <div className="register">
            <form onSubmit={handleRegister}>
                <h2>Register:</h2>

                <label>username:</label>
                <input type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}>
                </input>

                <label>Email:</label>
                <input type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}>
                </input>

                <label>Password:</label>
                <input type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}>
                </input>

                <button type="submit">register</button>
               { error && <div className="error">{error}</div>}
            </form>
        </div>
    )
}

export default Register