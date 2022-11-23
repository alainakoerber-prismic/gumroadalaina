import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const ImageTextSlice = ({ slice }) => (
  <section>
    <div className={slice.variation}>
      <div className="bg-black border-right">
        <div className="column-padding centered">
        {
          slice.variation === 'titleNoImage' ? 
          null 
          : <img src={slice.primary.imagehalf.url} alt={slice.primary.imagehalf.alt} /> 
        }
        </div>
      </div>
        
      <div className="column-padding">
        <div className="content-grid">
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
          max-width: 1200px;
          margin: 4em auto;
          text-align: center;
          font-family: 'Mabry pro', sans-serif;
        }
        .about-container {
          margin: 0 auto;
          padding: 10px;
        }
        
        .row {
          display: grid;
          grid-template-columns: 25% 1fr; /* or use 50% instad of 1fr */
          margin: 0 0 50px;
        }
        
        img {
          max-width: 100%;
        }
        
        .row:nth-child(2n) {
          grid-template-columns: 1fr 25%;
        }
        
        .row:nth-child(2n) .col-2 {
          grid-area: 1;
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

        .bg-black {
          background-color: #000;
          color: #fff;
        }

        .border-right {
          border-right: 2px solid #000;
        }


      }

    `}</style>
  </section>
)

export default ImageTextSlice
