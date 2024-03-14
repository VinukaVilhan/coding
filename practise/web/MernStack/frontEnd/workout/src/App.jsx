import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
// import Counter from './counter/counter'
// import QuoteFetcher from './quotePicker/quote'

//routes
import Home from './pages/home';
import Navbar from './components/navbar';
import BottomBar from './components/bottombar/bottombar';
import LogIn from './pages/login';
import SignUp from './pages/signUp';
import AboutUs from './pages/aboutUs';




function App() {

  const {user} = useAuthContext()
  return (
    <>
    <div className='App'>
      <BrowserRouter>
          <Navbar/>
        <div className='pages'>
          <Routes>
            <Route path="/" element={ user ?<Home/>: <Navigate to="/login"/>}/>
            <Route path="/login" element={ !user ? <LogIn/>: <Navigate to="/"/>}/>
            <Route path="/signUp" element={!user ? <SignUp/> : <Navigate to="/"/>} />
            <Route path="/aboutUs" element={<AboutUs/>}></Route>
          </Routes>
        </div>
        <BottomBar/>
      </BrowserRouter>
       
    </div>
    </>
  )
}

 {/* <QuoteFetcher/>
        <Counter/> */}

export default App
