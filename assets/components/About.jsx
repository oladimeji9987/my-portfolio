import Image1 from "./images/Portfolio 2.jpg"
const About = ()=>{
    return (
        <div className="abt">
            <img src={Image1} alt="" />
            <h2 className="me">ABOUT ME <br /><p>Hi, I am a frontend developer based in Lagos <br />and I have a background in Mathematics Education <br />
             from University of Ibadan. I am looking for exciting opportunities <br /> where I can showcase my skills and continue to learn. <br />Passionate and curious about solving critical problems, 
             <br />while focusing on interactivity and accessibility when coding. 
             <br />I'm currently exploring content writing and digital marketing <br />
             when I'm not coding. I enjoy coding, playing football, writing and travelling.</p></h2><br />

             <a href="http://bit.ly/3YBvNdX"><button>Download my CV</button></a> 
        </div>
    )

    
}


export default About;
