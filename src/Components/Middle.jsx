import React from 'react'

function Middle() {
    return (
        <div className='middle'>
            <div className='datahead'>
                <h2>Our Contribution</h2>
                <p style={{width:'800px',marginLeft:'25rem'}}>Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.</p>
            </div>
            <div className='data'>
                <div>
                    <h5>5M</h5>
                    <p className='datadesc'>Daily User Engagements</p>
                </div>
                <div>
                    <h5>$500K</h5>
                    <p className='datadesc'>Revenue Surge for an Platform</p>
                </div>
                <div>
                    <h5>10X</h5>
                    <p className='datadesc'>ROAS on all our marketing campaigns</p>
                </div>
            </div>
        </div>
    )
}

export default Middle