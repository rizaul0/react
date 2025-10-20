import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from "./store/store.js"
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import AddPost from './pages/AddPost.jsx'
import Home from './pages/Home.jsx';
import { AuthLayout ,Login,AllPosts} from './components/index.js';
import EditPost from './pages/EditPost.jsx';
import Post from './pages/PostPage.jsx';
import Signup from './components/Signup.jsx';
const router =createBrowserRouter([{
  path: '/',
  element: <App/>,
  children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPosts />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ]
}])







createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
     <RouterProvider router={router}>
      <App />
     </RouterProvider>
    </Provider>
    
  </StrictMode>,
)

// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';   // ✅ import Provider
// import App from './App.jsx';
// import store from './store/store.js';     // ✅ import your Redux store
// import './index.css';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Provider store={store}>              {/* ✅ wrap App inside Provider */}
//       <App />
//     </Provider>
//   </StrictMode>
// );


// https://cloud.appwrite.io/console/project-fra-68e9f63d00188c8cb8c3/overview/platforms