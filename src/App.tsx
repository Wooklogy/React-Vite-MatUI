import { RouterProvider } from "react-router-dom"
import PageRouters from "./config/url"




function App() {

  return (
    <RouterProvider router={PageRouters} />
  )
}

export default App
