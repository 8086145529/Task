import React from 'react'
import banner from '../assets/fortnite-pictures-b5kfcchwazwiz3cs 1.png'
function Banner() {
  return (
    <div className='banner'>
      <div className='heading'>
     <h3>Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.</h3> 
    </div>
    <div className='bimg'>
        <img src={banner} alt="" />
    </div>
    <div className='desc'>
        <h6  className='bdesc'>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In</h6>
    </div>
    <button className='btn btn-light col-2'>Visit Website</button>  
    </div>
  )
}

export default Banner