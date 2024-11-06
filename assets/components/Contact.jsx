import image1 from "./images/whatsapp.jpeg"
import image2 from "./images/linkedin.jpeg"
import image3 from "./images/github-img.png"



const Contact = ()=>{
    return (
        <div className="connect">
            <h1>CONNECT WITH ME</h1>
            <h2>Feel free to connect with me through these channels</h2>
            <a href="https://wa.link/gw2z22"><img src={image1} alt="" /></a>
            <a href="https://www.linkedin.com/in/oladimeji-ismaheel/"><img src={image2} alt="" /></a>
            <a href="https://github.com/oladimeji9987/"><img src={image3} alt="" /></a>
        </div>
    )
}

export default Contact;