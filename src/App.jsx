 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LoginPage from "./pages/login"
import RegisterPage from "./pages/register"
import BerandaPage from "./pages/beranda"
import DaftarSaya from "./pages/beranda/DaftarSaya";
import Series from "./pages/beranda/Series";
import Films from "./pages/beranda/Films";
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
  ,
  {
    path: "/series",
    element: <Series/>,
  }
  ,
  {
    path: "/films",
    element: <Films/>,
  }
]);
function App() {

  return (
    
      
      <RouterProvider router={router} />
    
  )
}

export default App
