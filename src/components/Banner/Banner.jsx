import React from 'react';
import './Banner.scss';

const Banner = ({ bannerImgLink, bannerText, altImg }) => {
  return (
    <div className="bannerContainer">
      <img className='bannerContainer__Img' src={bannerImgLink} alt={altImg} />
      <div className='bannerContainer__textContainer'>
        {bannerText}
      </div>
    </div>
  );
};

export default Banner;
