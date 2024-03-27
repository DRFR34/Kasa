import React from 'react'
import { Link } from 'react-router-dom';

import './Page404.scss'

export default function Page404() {
  return (
    <>
      <div className="errorCode">404</div>
      <div className="errorMsg">Oups! La page que vous demandez n'existe pas.</div>
      <Link className="linkToHome" to="/">Retourner sur la page d’accueil</Link>
    </>
  )
}
