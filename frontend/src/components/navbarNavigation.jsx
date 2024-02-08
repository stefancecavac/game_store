import {Link} from 'react-router-dom'
import '../css/navbarNavigation.css'
import { useUserContext } from '../hooks/useUserHook'

const NavbarNavigation = () => {
    const {user} = useUserContext()

    return(
        <div className="navbarnavigation">
            <Link to='/'>Home</Link>
            {user && user.isAdmin &&(<Link to='/admin'>Admin</Link>)}
        </div>
    )
}

export default NavbarNavigation