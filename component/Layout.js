import NavBar from "./Navbar";

const Layout = ({children}) => {
    return(
        <>
        <NavBar></NavBar>
        {children}
        </>
    )
}

export default Layout;