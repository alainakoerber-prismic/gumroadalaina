import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const ImageTextSlice = ({ slice }) => (
  <section>
    <div className={slice.variation}>
      <div className="bg-black column-padding">
        {
          slice.variation === 'titleNoImage' ? 
          null 
          : <img src={slice.primary.imagehalf.url} alt={slice.primary.imagehalf.alt} /> 
        }
      </div>
        
      <div className="column-padding">
        <div>
        {slice.variation === 'imageright' ? <span> {slice.primary.date} </span> :  null }
        {slice.variation === 'noTitleAndImage' ? 
        null
        : <span className="title">
          {
            slice.primary.title ? 
            <PrismicRichText field={slice.primary.title}/>
            : <h2>Template slice, update me!</h2>
          }
        </span>
        }

          <div className="text-md">
          {
          slice.primary.description ?
          <PrismicRichText field={slice.primary.description}/>
          : <p>start by editing this slice from inside Slice Machine!</p>
          }
          </div>
          <div>
            {slice.variation === 'noTitleAndImage' ? <PrismicRichText field={slice.primary.richtext} /> : null }
          </div>          
        </div>
      </div>
    </div>
    

   
    
    <style jsx>{`
        section {
          max-width: 100%;
          margin: 4em auto;
          text-align: center;
          font-family: 'Mabry pro', sans-serif;
        }
        
        
        .column-padding {
          justify-content: center;
          padding: 6.5vw;
        }
        
        img {
          max-width: 100%;
        }

        .default {
          display: -ms-grid;
          display: grid;
          width: 100%;
          grid-auto-columns: 1fr;
          grid-column-gap: 0px;
          grid-row-gap: 0px;
          -ms-grid-columns: 1fr 1fr;
          grid-template-columns: 1fr 1fr;
          -ms-grid-rows: auto;
          grid-template-rows: auto;
          border-bottom: 2px solid #000;
          border-top: 2px solid #000;
        }

        .imageright {
          display: -ms-grid;
          display: grid;
          width: 100%;
          grid-auto-columns: 1fr;
          grid-column-gap: 0px;
          grid-row-gap: 0px;
          -ms-grid-columns: 1fr 1fr;
          grid-template-columns: 1fr 1fr;
          -ms-grid-rows: auto;
          grid-template-rows: auto;
          border-bottom: 2px solid #000;
          direction: rtl;
        }

        .titleNoImage {
          display: -ms-grid;
          display: grid;
          width: 100%;
          grid-auto-columns: 1fr;
          grid-column-gap: 0px;
          grid-row-gap: 0px;
          -ms-grid-columns: 1fr 1fr;
          grid-template-columns: 1fr 1fr;
          -ms-grid-rows: auto;
          grid-template-rows: auto;
          border-bottom: 2px solid #000;
        }

        .noTitleAndImage {
          display: -ms-grid;
          display: grid;
          width: 100%;
          grid-auto-columns: 1fr;
          grid-column-gap: 0px;
          grid-row-gap: 0px;
          -ms-grid-columns: 1fr 1fr;
          grid-template-columns: 1fr 1fr;
          -ms-grid-rows: auto;
          grid-template-rows: auto;
          border-bottom: 2px solid #000;
        }

        .border-right {
          border-right: 2px solid #000;
        }


      }

    `}</style>
  </section>
)

export default ImageTextSlice
