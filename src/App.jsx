// import { useState } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";

const App = () => {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' >
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  )
  return (
    <div>
      <div className=''>
        <RouterProvider router={routes} />
      </div>
    </div>
  )
}

export default App;