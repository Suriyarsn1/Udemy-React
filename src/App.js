import "./style.css"
import Navbar from "./Component/Navbar"
import Menubar from "./Component/Menubar"
import Recommented from "./Component/Recommented-Section"
import Topics from "./Component/Topics"
import Recommented1 from "./Component/Recommented1"
import Footer from "./Component/Footer"

function App(){
    return(
        <>
        <Navbar></Navbar>
        <Menubar></Menubar>
        <Recommented></Recommented>
        <Topics></Topics>
        <Recommented1></Recommented1>
        <Footer></Footer>
          </>
    )
}
export default App