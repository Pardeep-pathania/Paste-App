import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Paste from "./components/Paste"
import ViewPaste from "./components/ViewPaste"
import Navbar from "./components/Navbar"


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div className="w-full h-full flex flex-col bg-gray-300">
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/pastes",
      element: <div className="w-full h-full flex flex-col bg-gray-300">
      <Navbar/>
      <Paste/>
    </div>
    },
    {
      path:"/pastes/:id",
      element: <div className="w-full h-full flex flex-col bg-gray-300">
      <Navbar/>
      <ViewPaste/>
    </div>,
    }
  ]
)

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App