import React from 'react'
import Banner from '../../componentsDrafts/Banner';
// import aboutBanner from '../../src/assets/images/aboutBanner.png';
import aboutBanner from '../assets/images/aboutBanner.png';
import AboutCollapsesList from '../../componentsDrafts/AboutCollapsesList';

export default function About() {
  return (
    <>

      <Banner
        bannerImgLink={aboutBanner}
        bannerText=" "
        altImg="bannière à propos"
      />
      <AboutCollapsesList />
    </>
  )
}
