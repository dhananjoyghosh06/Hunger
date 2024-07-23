import Navbar from "../components/Navbar.jsx";
import Body from "../components/Body";
import Footer from "../components/Footer";

const props = {
    children:null,
};

const Layout = ({children}) =>{
    return (
        <div className="flex flex-col min-h-screen ">
            <Navbar/>
            <Body/>
            <div className="container mx-auto flex-1 py-10">{children}</div>
            <Footer/>
        </div>
    )
}

export default Layout;