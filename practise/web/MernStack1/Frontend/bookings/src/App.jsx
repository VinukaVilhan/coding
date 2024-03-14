import './App.css'
//route modules
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
//home component
import Home from './pages/home';
import BookingPage from './pages/bookingPage';
import SignInSide from './pages/login';

function App() {
  

  return (
    <>
      <BrowserRouter>
       <Navbar/>
        <div className='pages'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/bookings" element={<BookingPage/>}/>
            <Route path="/login" element={<SignInSide/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
