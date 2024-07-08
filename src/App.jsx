import { createBrowserRouter, RouterProvider } from "react-router-dom"; 

import MainEditor from "./MainEditor"
import Blogs from "./Pages/Blogs";
import UpperToggle from "./Components/UpperToggle";






function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<MainEditor/>,
    },
    {
      path:"/blogs",
      element:<Blogs/>,
    },
    
  ])
 


  return (
    <>
    <UpperToggle/>
 <RouterProvider router={router} />
     
    </>
  )
}

export default App
