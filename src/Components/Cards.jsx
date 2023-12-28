import React from 'react'

function Cards({cards,description}) {
  return (
    <div >
        <div >
            <img src={cards} alt="card" />
        </div>
        <div className='cdesc'>
            <h6 >{description}</h6>
        </div>
    </div>
  )
}

export default Cards