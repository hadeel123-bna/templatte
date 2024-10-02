import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ServeItem = (props) => {  // Renommé avec une majuscule
  return (
    <div className='box'>
      <FontAwesomeIcon icon={props.icons}/>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    
    </div>
  )
}

export default ServeItem
