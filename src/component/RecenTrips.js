import "./RecentTripsStyles.css"
import React from 'react'
import Trip1 from "../assets/trips1.mp4"
import Trip2 from "../assets/trips2.mp4"
import Trip3 from "../assets/trips3.mp4"
function RecenTrips() {
  return (
    <div className="recenTrips">
      <div className="text">
      <h1>Recent Trips</h1>
      <p>You can Discover More Places Using Google Map</p>
      </div>
      <div className="trips"> 
      <div className="tripsColumn">
      <div className="borderColumn">
      <video src={Trip1} autoPlay loop muted/>
      <h2>Trips in America</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, exercitationem! Alias culpa doloribus saepe iusto nam ipsum voluptates, optio voluptatem cum dolores porro eaque perspiciatis rem voluptas quas mollitia dolorem?</p>
      </div>
      </div>
      <div className="tripsColumn">
      <video src={Trip2} autoPlay loop muted/>
      <h2>Trips in France</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, exercitationem! Alias culpa doloribus saepe iusto nam ipsum voluptates, optio voluptatem cum dolores porro eaque perspiciatis rem voluptas quas mollitia dolorem?</p>
      </div>
      <div className="tripsColumn">
      <video src={Trip3} autoPlay loop muted/>
      <h2>Trips in India</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, exercitationem! Alias culpa doloribus saepe iusto nam ipsum voluptates, optio voluptatem cum dolores porro eaque perspiciatis rem voluptas quas mollitia dolorem?</p>
      </div>
      </div>
    </div>
  )
}

export default RecenTrips
