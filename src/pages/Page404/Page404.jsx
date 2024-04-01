import React from 'react'
import { Link } from 'react-router-dom';

import './Page404.scss'

export default function Page404() {
  return (
    <main>
      <h1 className="errorCode">404</h1>
      <p className="errorMsg">
        <span>Oups! La page que&nbsp;</span>
        <span> vous demandez n'existe pas.</span>
      </p>
      <Link className="linkToHome" to="/">Retourner sur la page d’accueil</Link>
    </main>
  )
}
