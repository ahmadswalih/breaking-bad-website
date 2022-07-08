import React from 'react'
import Logo from '../../img/logo.png'

const Header = () => {
  return (
    <header className="center">
        <a href="/"><img src={Logo} alt="logo"/></a>
    </header>
  )
}

export default Header
