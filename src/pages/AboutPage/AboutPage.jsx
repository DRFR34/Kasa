import React from 'react'
import Banner from '../../components/Banner/Banner';
import aboutBanner from '../../assets/images/aboutBanner.png';
import AboutCollapsesList from '../../components/AboutCollapsesList/AboutCollapsesList';

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
