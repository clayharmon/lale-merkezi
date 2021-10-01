import * as React from "react"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main>{children}</main>
        <footer>
          ©{new Date().getFullYear()} Lale Merkezi. All Rights Reserved.
        </footer>
      </div>
    </>
  )
}

export default Layout
