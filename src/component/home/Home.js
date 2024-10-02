import React from 'react'
import Header from './header/Header';
import './home.css'
import Service from './jobs/Service';
import Section from './section/Section';
import Price from './pricing/Price';

 const home = () => {
  return (
    <>
    <Header/>
    <Service/>
    <Section/>
    <Price/>
    </>
  )
}
export default home;