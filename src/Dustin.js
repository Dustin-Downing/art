import React from 'react'
import logo from './imgs/logo-dark.png'

import ShopHome from './components/ShopHome'
import CommissionSection from './components/CommissionSection'
import Gallary from './components/Gallary'
import './App.css';

function DustinApp(props) {
  return (
    <div className="App">
      <header className="App-header">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <CommissionSection/>
      <ShopHome/>
      <Gallary/>
    </div>
  )

}

export default DustinApp;
