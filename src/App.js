
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';

import { ToastContainer  } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppoinment from './Pages/Dashboard/MyAppoinment';
import MyReview from './Pages/Dashboard/MyReview';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='appoinment' element={<RequireAuth><Appointment></Appointment></RequireAuth>} />
        <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>} >
          <Route index element={<MyAppoinment></MyAppoinment>}></Route>
          <Route path='review'  element={<MyReview></MyReview>}></Route>
           </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
