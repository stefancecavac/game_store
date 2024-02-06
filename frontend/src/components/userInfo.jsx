import '../css/userInfo.css'
import { Link } from 'react-router-dom'
import { useUserContext } from '../hooks/useUserHook'
import{useGameContext} from '../hooks/useGamehook'

const UserInfo = () => {
    const{user , dispatch} = useUserContext()
    const{dispatch:gameDispatch} = useGameContext()
    const handleLogout = async() =>{
       
        localStorage.removeItem('user')

        dispatch({type:'LOGOUT'})
        gameDispatch({type:'SET_GAMES'})
    }
    return(

        <div className="userinfo">
            {user && <p>{user.username}</p>}
            {user ? ( <button className='logout' onClick={handleLogout}>logout</button>) : (<Link to='/login'>LOGIN</Link>)}
         
          
        </div>
    )
}

export default UserInfo