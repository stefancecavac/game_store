import { useState } from "react"
import { useUserContext } from "../hooks/useUserHook"
import { Link } from "react-router-dom"
import '../css/login.css'

const Login = () => {
    const { dispatch } = useUserContext()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`http://localhost:4000/api/auth/login`, {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const json = await response.json()

            if (!response.ok) {
                setError(json.error)
            }

            if (response.ok) {
                localStorage.setItem('user', JSON.stringify(json))
                setError(null)
                dispatch({ type: "LOGIN", payload: json })
            }

        }
        catch (error) {
            console.log(error)
        }
    }

    return (

        <div className="login">
            <form onSubmit={handleLogin}>
                <h2>Login:</h2>

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

                <button type="submit">login</button>

                <p>Dont have a account? <Link to='/register'>register</Link></p>

                {error && <div className="error">{error}</div>}
            </form>
        </div>
    )
}

export default Login