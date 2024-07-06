 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LoginPage from "./pages/login"
import RegisterPage from "./pages/register"
import BerandaPage from "./pages/beranda"
import DaftarSaya from "./pages/beranda/DaftarSaya";
const router = createBrowserRouter([
  {
    path: "/",
    element: <BerandaPage/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/register",
    element: <RegisterPage/>,
  }
  ,
  {
    path: "/daftarsaya",
    element: <DaftarSaya/>,
  }
]);
function App() {

  return (
    
      
      <RouterProvider router={router} />
    
  )
}

export default App
