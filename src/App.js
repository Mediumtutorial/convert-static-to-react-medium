import React, { Component } from 'react'
import Header from './components/header/header'
import Banner from './components/banner/banner'
import Features from './components/features/features'
import Subscribe from './components/subscribe/subscribe'
import Classes from './components/classes/classes'
import Schedule from './components/schedule/schedule'
import Trainers from './components/trainers/trainers'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Banner />
        <Features/>
        <Subscribe/>
        <Classes/>
        <Schedule/>
        <Trainers />
        <Contact />
        <Footer/>
      </>
    )
  }
}

