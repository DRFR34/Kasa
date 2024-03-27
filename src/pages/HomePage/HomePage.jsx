import React from 'react'
import RentalsGrid from "../../components/RentalsGrid/RentalsGrid"
import Banner from "../../components/Banner/Banner"
import homeBannerImg from "../../assets/images/homeBannerImg.png"

import "./HomePage.scss"

export default function HomePage() {
  return (
    <>
      <Banner
        bannerImgLink={homeBannerImg}
        bannerText="Chez vous, partout et ailleurs"
        altImg="bannière accueil"
      />
      <RentalsGrid />
    </>
  )
}



