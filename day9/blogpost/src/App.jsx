import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import conf from './conf/conf';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AuthService from "./appwrite/auth"
import './App.css'
import { login, logout } from './store/authSlice'

import {Outlet} from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  // In your App.jsx
useEffect(() => {
  AuthService.currentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({ userData }));
      } else {
        dispatch(logout());
      }
    })
    .catch((error) => {
      console.log("Appwrite Auth Error:", error.message);
      dispatch(logout());
    })
    .finally(() => setLoading(false));
}, []);


  return !loading ? (
    <div className='min-h-screen m-0 flex flex-wrap content-between bg-gray-400 '>
  <div className=' w-full block'>
    <Header />
    <main>todo{/* <Outlet /> */}</main>
    <Footer />
  </div>
</div>

  ) : null
}

export default App
 // useEffect(() => {
  //   AuthService.currentUser().then((userData) => {
  //     if (userData) {
  //       dispatch(login({ userData }))
  //     }
  //     else dispatch(logout()).catch((error) => {
  //       console.log("Appwrite Auth Error:", error.message);
  //       dispatch(logout());
  //     })
  //   }).finally(() => {
  //     setLoading(false)
  //   })


  // }, [])