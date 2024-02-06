import '../css/navbar.css'

import UserInfo from './userInfo'
import NavbarNavigation from './navbarNavigation'

const Navbar = () => {

    return(
        <header>
            <h1>Game Store</h1>
            <NavbarNavigation></NavbarNavigation>
            <UserInfo></UserInfo>
        </header>
    )
}

export default Navbar