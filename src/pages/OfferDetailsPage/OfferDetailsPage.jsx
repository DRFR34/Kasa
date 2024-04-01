import React from 'react'
import { useParams } from 'react-router-dom'
import Page404 from '../Page404/Page404';
import Slider from '../../components/Slider/Slider';
import Tags from '../../components/Tags/Tags';
import Collapse from '../../components/Collapse/Collapse'
import Rating from '../../components/Rating/Rating';
import RentalsData from '../../assets/data/rentalsData.json'

import "./OfferDetailsPage.scss"

export default function RentalOfferDetails() {
  const { rentalOfferId } = useParams();
  const rentalOffer = RentalsData.find((rentalOffer) => rentalOffer.id === rentalOfferId);
  if (!rentalOffer) {
    return (<div><Page404 /></div>)
  }
  return (
    <main className='offerDetailsContainer'>



      <Slider rentalOfferPictures={rentalOffer.pictures} />


      <div className="offerDetailsContainer__Summary">
        <div className='offerDetailsContainer__Summary__titleAndLocation'>
          <h1 className='offerDetailsContainer__Summary__titleAndLocation__title'>{rentalOffer.title}</h1>
          <span className='offerDetailsContainer__Summary__titleAndLocation__location'>{rentalOffer.location}</span>
          <Tags rentalOfferTags={rentalOffer.tags} />
        </div>


        <div className="offerDetailsContainer__Summary__hostInfos">
          <div className="offerDetailsContainer__Summary__hostInfos__identity">
            <div className="offerDetailsContainer__Summary__hostInfos__identity__name">
              <span>{rentalOffer.host.name.split(' ')[0]}</span>
              <span>{rentalOffer.host.name.split(' ')[1]}</span>
            </div>
            <div className="offerDetailsContainer__Summary__hostInfos__identity__portrait">
              <img src={rentalOffer.host.picture} alt="portrait de l'hôte"></img>
            </div>
          </div>
          <Rating score={rentalOffer.rating} />
        </div>
      </div>

      <div className='offerDetailsContainer__collapses'>
        <Collapse title='Description' content={rentalOffer.description} />
        <Collapse title='Équipements' content={rentalOffer.equipments} />
      </div>

    </main>
  )
}
