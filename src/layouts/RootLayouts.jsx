import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const RootLayouts = () => {
  return (
      <>
          <Header />
          <main>
              <Outlet />
          </main>
    </>
  )
}

export default RootLayouts