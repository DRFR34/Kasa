import React from 'react'
import './Tags.scss'
export default function Tags({ rentalOfferTags }) {

  return (
    <div className='tagsContainer'>
      {rentalOfferTags.map((tag, index) => (
        <span key={index} className='tagsContainer__tag'>{tag}</span>))}
    </div>
  )
}
