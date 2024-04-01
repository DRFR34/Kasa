import React from 'react'
import RentalsGrid from "../../components/RentalsGrid/RentalsGrid"
import Banner from "../../components/Banner/Banner"
import homeBannerImg from "../../assets/images/homeBannerImg.png"


export default function HomePage() {
  return (
    <main>
      <Banner
        bannerImgLink={homeBannerImg}
        bannerText={ <div className='bannerContainer__textContainer-textBox'><span>Chez vous,&nbsp;</span><span>partout et ailleurs</span></div> } 
        altImg="bannière accueil"
      />
      <RentalsGrid />
    </main>
  )
}



