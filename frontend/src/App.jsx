import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useAuthContext } from './context/AuthContext';

function App() {
  // Get the authUser state from the AuthContext
  const { authUser } = useAuthContext();

  return (
    <>
      <div className="p-4 h-screen flex justify-center items-center">
        {/* Use React Router's Routes to define different routes */}
        <Routes>
          
          {/* Render the Home component if user is authenticated, otherwise redirect to the Login page */}
          <Route path='/' element={authUser ? <Home /> : <Navigate to={'/login'} />} />

          {/* Render the Signup component if user is not authenticated, otherwise redirect to the Home page */}
          <Route path='/signup' element={authUser ? <Navigate to={'/'} /> : <Signup />} />

          {/* Render the Login component if user is not authenticated, otherwise redirect to the Home page */}
          <Route path='/login' element={authUser ? <Navigate to={'/'} /> : <Login />} />

          
        </Routes>
        {/* Display the toast notifications */}
        <Toaster />
      </div>
    </>
  )
}

export default App;
