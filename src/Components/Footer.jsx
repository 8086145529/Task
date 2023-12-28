import React from 'react'

function Footer() {
  return (
    <div className='footer'>
       <div className=' footermain'>
            <div>
                <h3>Interested In Delving Deeper Into The Project?</h3>
            </div>
            <div>
                <p style={{width:'35rem',textAlign:'center'}} >If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at hello@abc.com or give us a call at +91 480 20802730</p>
            </div>
       </div>
        <div className='button'>
        <button className='btn btn-dark col-2 me-2'>Ring us on Skype </button>  
        <button className='btn btn-light col-2 ms-2'>Contact Us</button>  
        </div>
        <div className='last'>
            <p>© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer