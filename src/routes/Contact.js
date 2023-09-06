import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import AboutImg from "../assets/2.jpg"
function Contact() {
    return (
        <>
       <Navbar/>
       <Hero 
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact Us !"
        btnClass="hide"
     />
        </>
    )
}
export default Contact;