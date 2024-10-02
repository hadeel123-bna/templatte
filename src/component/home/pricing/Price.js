import React from 'react';
import Data from '../../../Data'; // Assurez-vous que le chemin est correct
import Items from './Items';

const Price = () => {
  const prix = Data.pricing.map((itemPrice, index) => {
    return (
      <div className='col-md-4' key={index}>
        <Items 
          title={itemPrice.title} 
          price={itemPrice.price} 
          time={itemPrice.time} 
          bandwidth={itemPrice.bandwidth} 
          storage={itemPrice.storage} 
        />
      </div>
    );
  });

  return (
    <section className='Price'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h2>Our pricing</h2>
            <p>Call to action table is really crucial to your for your business web site.<br/>Make your bids.</p>
          </div>
        </div>
        <div className='row'>
          {prix}
        </div>
      </div>
    </section>
  );
};

export default Price;
