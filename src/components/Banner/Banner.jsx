import React from 'react';
import '../css/Banner.scss';

const Banner = ({ bannerImgLink, bannerText, altImg }) => {
  return (
    <div className="bannerContainer">
      <img className='bannerImg' src={bannerImgLink} alt={altImg} />
      <div className="bannerText">{bannerText}</div>
    </div>
  );
};

export default Banner;
