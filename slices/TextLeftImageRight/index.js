import React from 'react'
import { PrismicRichText,PrismicLink } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.TextLeftImageRightSlice} TextLeftImageRightSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextLeftImageRightSlice>} TextLeftImageRightProps
 * @param { TextLeftImageRightProps }
 */
const TextLeftImageRight = ({ slice }) => (
  <section className="default">
    <div className="column-padding border-right">
        <div>
            <span className="title">
            {
              slice.primary.title ? 
                <PrismicRichText field={slice.primary.title}/>
              : <h2>Template slice, update me!</h2>
            }
            </span>
            <span className='description'>
            {
            slice.primary.description ?
            <PrismicRichText field={slice.primary.description}/>
            : <p>start by editing this slice from inside Slice Machine!</p>
            }
            </span>
        </div>
        <div className='button'>    
        <PrismicLink field={slice.primary.buttonlink}><span>{slice.primary.buttontext}</span></PrismicLink>
        </div>
    </div>

    <div className="column-padding">
         <div className='bg-pink'>
            <div>
              <img src={slice.primary.imageright.url} alt={slice.primary.imageright.alt} /> 
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

        .bg-pink {
          background-color: ##ff90e8;
          color: #fff;
        }

        .border-right {
          border-right: 2px solid #000;
        }


      }

    `}</style>
  </section>
)

export default TextLeftImageRight




