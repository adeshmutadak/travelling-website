import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import AboutImg from "../assets/1.jpg"
function Service() {
    return (
        <>
    <Navbar/>
     <Hero 
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service !"
        btnClass="hide"
     />
        </>
    )
}
export default Service;