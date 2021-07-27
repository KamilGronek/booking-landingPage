
import * as React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import Footer from "./Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import CoronaWarning from "./CoronaWarning"


const Layout = ({children}) => {
  return (
    <>
      <Header/>
      <CoronaWarning/>
        <main>{children}</main>  
      <Footer/>  
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
