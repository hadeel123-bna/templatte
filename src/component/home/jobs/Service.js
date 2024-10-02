import React from 'react'
import Data from '../../../Data'
import ServeItem from './ServeItems' 
import './service.css' 
import photo from './photo.png';

const Service = () => {
  const items = Data.service.map((itembox, index) => {
    return (
      <div className='col-md-4' key={index}> 
        <ServeItem title={itembox.title} text={itembox.text} icons={itembox.icons}/>
      </div>
    )
  });

  return (
    <section className='service'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 col-md-12'> 
            <h2>Lorem Ipsum</h2>
            <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."<br/>
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</p> 
          </div>
        </div>
        <div className='row'>
          {items}
        </div>
      <div className='row last'>
          <div className='col-md-6'>
            <h3>Lorem</h3>
            <p>lorem ,Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."<br/>
            "There is no one who loves pain itself</p>
           
            <button >Learn More</button>  
          </div>
          <div className='col-md-6'>
            <img src={photo} alt="phot" />
          </div>
          </div>
          </div>
    </section>
  )
}

export default Service
