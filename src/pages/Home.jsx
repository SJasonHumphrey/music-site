import React from 'react'
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';
  import Concert1 from '../assets/concert-1.jpg'
  import Concert2 from '../assets/concert-2.jpg'
  import Concert3 from '../assets/concert-3.jpg'

const Home = () => {
  return (
<MDBCarousel>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={Concert1}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={Concert2}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={Concert3}
        alt='...'
      />
    </MDBCarousel>

  )
}

export default Home