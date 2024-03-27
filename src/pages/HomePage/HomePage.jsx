import "../css/HomePage.css"
import React from 'react'
import RentalsGrid from "../../componentsDrafts/RentalsGrid"
import Banner from "../../componentsDrafts/Banner"
import homeBannerImg from "../../src/assets/images/homeBannerImg.png"

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



