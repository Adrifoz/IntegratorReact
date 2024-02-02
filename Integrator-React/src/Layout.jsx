import { Outlet, Link } from "react-router-dom"

function Layout() {
  return (
    <>
        <nav>
            <ul>
                <li>
                    <link to="/">Home</link>
                </li>
                <li>
                    <link to="Productos">Home</link>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </>
  )
}

export default Layout