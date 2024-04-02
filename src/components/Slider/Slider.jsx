import React, { useState } from 'react';
import "./Slider.scss";

export default function Slider({ rentalOfferPictures }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === rentalOfferPictures.length - 1 ? 0 : current + 1);
  };

  const previousSlide = () => {
    setCurrent(current === 0 ? rentalOfferPictures.length - 1 : current - 1);

  };

  return (
    <div className="sliderContainer">
      {rentalOfferPictures.map((picture, index) => (
        <div
          className={
            index === current ? 'slide active' :
              index === (current - 1) ? 'slide previous' :
                index === (current + 1) ? 'slide next' :
                  'slide'}
          key={index}
        >

          {index === current ? <img src={picture} alt={`référence ${index}`} /> :
            index === (current - 1) ? <img src={picture} alt={`référence ${index - 1}`} /> :
              index === (current + 1) ? <img src={picture} alt={`référence ${index + 1}`} /> :
                null
          }

        </div>
      ))}
      {rentalOfferPictures.length > 1 && (
        <>
          <div className="arrowBox previous" onClick={previousSlide}><i className="fa-solid fa-chevron-left"></i></div>
          <div className="arrowBox next" onClick={nextSlide} ><i className="fa-solid fa-chevron-right"></i></div>
          <div className="pictureRankBox" >
            <span>{current + 1}</span>
            <span> / {rentalOfferPictures.length}</span>
          </div>
        </>
      )}
    </div>
  );
};



