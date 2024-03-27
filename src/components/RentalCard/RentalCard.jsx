import React from 'react'

import "./RentalCard.scss"
import { Link } from 'react-router-dom';


export default function RentalCard({ rentalOffer }) {
  return (
    <div className="rentalCard">
    <Link to={`/locations/${rentalOffer.id}`}>
        <img src={rentalOffer.cover} alt={rentalOffer.title} />
        <div className='cardTextContainer'>
          <h2>{rentalOffer.title}</h2>
        </div>
        
    </Link>
</div>
  )
}
