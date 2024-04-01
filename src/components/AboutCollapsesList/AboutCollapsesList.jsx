import React from 'react'
import {aboutCollapsesTexts} from "../../assets/data/aboutCollapsesTexts";

import "./AboutCollapsesList.scss"

import Collapse from "../Collapse/Collapse";


export default function AboutCollapsesList() {
  return (
    <div className='AboutCollapsesList'>
       {aboutCollapsesTexts.map((AboutCollapseText, index) => <Collapse {...AboutCollapseText} key={index} /> )}
    </div>
  )
}


