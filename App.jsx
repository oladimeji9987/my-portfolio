import Capability from "./assets/components/Capability"
import Header from "./assets/components/Header"
import About from "./assets/components/About"
import Projects from "./assets/components/Projects"
import Contact from "./assets/components/Contact"
import "./index.css"


const App = ()=>{
    return (
        <div>
            <Header/>
            <About/>
            <Capability/>
            <Projects/>
            <Contact/>
        </div>
    )
}

export default App;