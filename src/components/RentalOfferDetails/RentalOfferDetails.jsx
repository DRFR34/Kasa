import React from 'react'
import { useParams } from 'react-router-dom'
import Page404 from '../../pages/Page404/Page404';
import Slider1 from '../../componentsDrafts/Slider1';
import Tags from '../../componentsDrafts/Tags';
import Collapse from './Collapse'
import RentalsData from '../../assets/data/rentalsData.json'

import "./RentalOfferDetails.scss"
import Rating from '../../componentsDrafts/Rating';
export default function RentalOfferDetails() {
  const { rentalOfferId } = useParams();
  const rentalOffer = RentalsData.find((rentalOffer) => rentalOffer.id === rentalOfferId);
  if (!rentalOffer) {
    return (<div><Page404 /></div>)
  }
  return (
    <div className='rentalOfferDetailsContainer'>



      <Slider1 rentalOfferPictures={rentalOffer.pictures} />


      <div className="rentalOfferSummary">
        <div className='title&Location'>
          <h1 className='rentalOfferTitle'>{rentalOffer.title}</h1>
          <span>{rentalOffer.location}</span>
          <Tags rentalOfferTags={rentalOffer.tags} />
        </div>


        <div className="hostInfos">
          <div className="hostIdentity">
            <div className="hostName">
              <span>{rentalOffer.host.name.split(' ')[0]}</span>
              <span>{rentalOffer.host.name.split(' ')[1]}</span>
            </div>
            <div className="hostPortrait">
              <img src={rentalOffer.host.picture} alt="portrait de l'hôte"></img>
            </div>
          </div>
          <Rating score={rentalOffer.rating} />
        </div>
      </div>

      <div className='rentalOfferCollapses'>
        <Collapse title='Description' content={rentalOffer.description} />
        <Collapse title='Équipements' content={rentalOffer.equipments} />

      </div>

    </div>
  )
}
