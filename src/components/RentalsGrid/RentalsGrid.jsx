import React from 'react'
import RentalsData from '../../assets/data/rentalsData.json'
import RentalCard from '../RentalCard/RentalCard'
import "./RentalsGrid.scss"

export default function RentalsGrid() {
  return (
    <section className="rentalsGrid">
      {RentalsData.map((rentalOffer) => (
                <RentalCard key={rentalOffer.id} rentalOffer={rentalOffer} />
            ))}

    </section>
  )
}
