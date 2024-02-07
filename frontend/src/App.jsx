import { BrowserRouter, Routes, Route ,Navigate} from 'react-router-dom'
import { useUserContext } from './hooks/useUserHook'

//components import
import Navbar from './components/navbar'

//pages import
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import GamePage from './pages/gamePage'

function App() {
  const{user} = useUserContext()

  return (
    <>
      <BrowserRouter>

        <Navbar></Navbar>

        <Routes>

          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/:gameId' element={<GamePage></GamePage>}></Route>

          <Route path='/login' element={user ? (<Navigate to='/'></Navigate>) : (<Login></Login>)}></Route>
          <Route path='/register' element={user ? (<Navigate to='/'></Navigate>) : (<Register></Register>)}></Route>


        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
