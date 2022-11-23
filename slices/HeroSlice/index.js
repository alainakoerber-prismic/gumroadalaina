import React from 'react'
import { PrismicRichText,PrismicLink } from '@prismicio/react'

const HeroSlice = ({ slice }) => (
  <section className='section.intro-section'>
    <PrismicRichText field={slice.primary.eyebrow} />
    <span>
      {
        slice.primary.title ?
        <PrismicRichText className='section-title' field={slice.primary.title}/>
        : <h1>Template slice, update me!</h1>
      }
    </span>
    {
      slice.primary.description ?
      <PrismicRichText field={slice.primary.description}/>
      : <p>start by editing this slice from inside Slice Machine!</p>
    }

  <PrismicLink  field={slice.primary.link}><span >{ slice.primary.textlink }</span></PrismicLink>
  

    <style jsx>{`

    
        section {
          max-width: 1200px;
          margin: 4em auto;
          text-align: center;
          font-family: 'Mabry pro', sans-serif;


        .title {
          margin-top: 0px;
          margin-bottom: 0px;
          font-size: 5.625rem;
          line-height: 0.9;
          font-weight: 400;
          letter-spacing: -0.02em;
          color: #FFF;
        }

        .section.intro-section {
          padding-top: 5.5rem;
          padding-bottom: 6.5rem;
        }

        
    `}</style>
  </section>
)

export default HeroSlice