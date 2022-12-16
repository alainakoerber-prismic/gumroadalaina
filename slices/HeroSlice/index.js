import React from 'react'
import { PrismicRichText,PrismicLink } from '@prismicio/react'

const HeroSlice = ({ slice }) => (
  <section className='intro'>
    <div className='section-intro'>
      <PrismicRichText field={slice.primary.eyebrow} />
      <span>
        {
        slice.primary.title ?
        <PrismicRichText field={slice.primary.title}/>
        : <h1>Template slice, update me!</h1>
       }
      </span>
      {
      slice.primary.description ?
      <PrismicRichText field={slice.primary.description}/>
      : <p>start by editing this slice from inside Slice Machine!</p>
      }

      <PrismicLink  field={slice.primary.link}><h6>{ slice.primary.textlink }</h6></PrismicLink>
      </div>

    <style jsx>{`

    
        section {
          max-width: 1200px;
          margin: 4em auto;
          text-align: center;
          font-family: 'Mabry pro', sans-serif;

        .intro
        position: relative;
        padding-top: 6.5rem;
        padding-bottom: 7rem;
        border-bottom: 2px solid #000;
        }

        .section-intro {
          display: -ms-grid;
          display: grid;
          width: 65vw;
          max-width: 45rem;
          margin-right: auto;
          margin-left: auto;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
          grid-auto-columns: 1fr;
          grid-column-gap: 0rem;
          grid-row-gap: 2.5rem;
          -ms-grid-columns: 1fr;
          grid-template-columns: 1fr;
          -ms-grid-rows: auto auto;
          grid-template-rows: auto auto;
          text-align: center;
        }


        
    `}</style>
  </section>
)

export default HeroSlice