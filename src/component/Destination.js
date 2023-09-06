
import './DestinationStyles.css'
import Video from "../assets/video.mp4"
import Video1 from "../assets/video1.mp4"
import Nepal1 from "../assets/nepalVideo1.mp4"
import Nepal2 from "../assets/nepalVideo2.mp4"
import India1 from "../assets/india.mp4"
import India2 from "../assets/india2.mp4"
const Destination=()=>{
    return (
       <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Tours Give You Oppuritunity to Know Your Self</p>
        <div className="first-des">
            <div className="des-text">
         <h2>England , London</h2>
         <p>London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city. </p>
            </div>
            <div className="image">
                {/* <img src={Mountain1} alt="img" /> */}
                <video  src={Video} autoPlay loop muted/> 
                <video src={Video1} autoPlay loop muted/>
                {/* <img src={Mountain2} alt="img" /> */}
            </div>
        </div>
        <div className="first-des">
            <div className="image">
                {/* <img src={Mountain1} alt="img" /> */}
                <video src={Nepal2} autoPlay loop muted/> 
                <video src={Nepal1} autoPlay loop muted/>
                {/* <img src={Mountain2} alt="img" /> */}
            </div>
            <div className="des-text">
         <h2>Nepal , Kathmandu</h2>
         <p>Nepal lies between China and India in South Asia. The country is slightly larger than the state of Arkansas. Nepal has the greatest altitude change of any location on Earth. The lowlands are at sea level and the mountains of the Himalaya are the tallest in the world </p>
            </div>
        </div>
        <div className="first-des">
            <div className="des-text">
         <h2>India </h2>
         <p>Tourism in India | History | Culture | RegionsIndia is a country that attracts millions of tourists every year and is considered one of the most popular tourist destinations in the world. These visitors are attracted to its natural beauty and cultural heritage. It has many historic sites as well like the Taj Mahal, Golden Temple, Red Fort, etc. </p>
            </div>
            <div className="image">
                {/* <img src={Mountain1} alt="img" /> */}
                <video src={India1} autoPlay loop muted/> 
                <video src={India2} autoPlay loop muted/>
                {/* <img src={Mountain2} alt="img" /> */}
            </div>
        </div>
       </div>
    )
}
export default Destination