// import { useState } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import RootLayouts from "./layouts/RootLayouts";
import Home from "./pages/Home";

const App = () => {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayouts />} >
        <Route index  element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  )
  return (
    <div>
      <div className='bg-mainBg font-roboto'>
        <RouterProvider router={routes} />
      </div>
    </div>
  )
}

export default App;