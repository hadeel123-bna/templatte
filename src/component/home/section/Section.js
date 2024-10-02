import React from 'react';
import './Section.css';

const Section = () => {
  return (
    <section className='banner'>
      <div className='overlay'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <h2>Parce qu'on l’utilise ?</h2>
              <p>
                Le texte de remplissage Lorem ipsum est utilisé par les graphistes, les programmeurs
                et les imprimeurs dans le but d’occuper les espaces d’un site internet, d’un produit
                publicitaire ou d’une production éditoriale dont le texte final n’est pas encore prêt.
              </p>
              <br />
              <button>View more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
