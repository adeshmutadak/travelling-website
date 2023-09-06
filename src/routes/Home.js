import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Destination from "../component/Destination";
import RecenTrips from "../component/RecenTrips";

function Home() {
    return (
        <>
        
     <Navbar/>
     <Hero 
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        title="Journey Your  Your Story !"
        text="Choose Your Your Destination with Us"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
     />
     <Destination/>
     <RecenTrips/>
        </>
    )
}
export default Home;