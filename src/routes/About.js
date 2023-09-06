import Navbar from "../component/Navbar";
// import Hero from "../component/Hero";
// import AboutImg from "../assets/night.jpg"
import "./AboutStyle.css"
import AboutImgg from "../assets/homeVideo.mp4"
function About() {
    return (
        <>
      
        <div className="about">
        <Navbar/>
        <video  src={AboutImgg} autoPlay loop muted  />

        <div className="container">
        <h1>About Us !</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corporis rerum quae voluptatem error maiores vel suscipit eligendi repellendus sequi ad, aliquid, eum placeat molestiae commodi magni. Optio, nostrum rerum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quas maiores reiciendis, aliquid porro eaque beatae, tempore odit earum quia fuga nihil illum voluptatum at rem in, cupiditate pariatur sapiente.</p>
        </div>
        
        </div>
       
     {/* <Hero 
        cName="hero-mid"
        heroImg={AboutImg}
        title="About Us !"
        btnClass="hide"
     />
     <div className="aboutText">
     Travel dates back to antiquity where wealthy Greeks and Romans would travel for leisure to their summer homes and villas in cities such as Pompeii and Baiae. While early travel tended to be slower, more dangerous, and more dominated by trade and migration, cultural and technological advances over many years have tended to mean that travel has become easier and more accessible.Humankind has come a long way in transportation since Christopher Columbus sailed to the New World from Spain in 1492, an expedition which took over 10 weeks to arrive at the final destination; to the 21st century when aircraft allows travel from Spain to the United States overnight."
     </div> */}
     
        </>
    )
}
export default About;