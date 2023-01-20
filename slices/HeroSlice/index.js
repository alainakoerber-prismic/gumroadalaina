import React from 'react'
import { PrismicRichText,PrismicLink } from '@prismicio/react'

const HeroSlice = ({ slice }) => (
<section className={slice.variation}>
    <div className='intro-section'>
      <div>
          {slice.variation === 'default' ? 
          <PrismicRichText field={slice.primary.title}/>
          : null 
          }
      </div>
      <div>
          <PrismicRichText field={slice.primary.description}/>
      </div>
      <div>
        {
          slice.variation === 'default' ? <PrismicLink  field={slice.primary.link}><h6 className='boldlink' >{ slice.primary.textlink }</h6></PrismicLink>
          : <img src={slice.primary.fullwidthimage.url} alt={slice.primary.fullwidthimage.alt}/> 
        }
      </div>
    </div>

    <style jsx>{`

    
        section {
          text-align: center;
          font-family: 'Mabry pro', sans-serif;
          border-bottom: 2px solid #000;
          justify-content: center;
          padding: 6.5vw;
        }

        .default {
          position: relative;
          padding-bottom: 7rem;
        }

        .herowithimage {
          position: relative;
          padding-bottom: 7rem;
        }

        .intro-section {  
          display: grid;
          width: 65vw;
          max-width: 45rem;
          margin-right: auto;
          margin-left: auto;
          flex-direction: column;
          justify-content: center;
          grid-auto-columns: 1fr;
          grid-column-gap: 0rem;
          grid-row-gap: 2.5rem;
          grid-template-columns: 1fr;
          grid-template-rows: auto auto;
          text-align: center;
        }
        
    `}</style>
  </section>
)

export default HeroSlice