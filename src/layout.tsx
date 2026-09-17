import { Outlet } from "react-router-dom"
import AppHeader from "./components/layout/app.header.tsx"
import AppFooter from "./components/layout/app.footer.tsx"

function Layout() {

  return (
    <div>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </div>
  )
}

export default Layout