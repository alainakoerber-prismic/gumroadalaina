import React from 'react'
import { PrismicRichText,PrismicLink } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.TextLeftImageRightSlice} TextLeftImageRightSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextLeftImageRightSlice>} TextLeftImageRightProps
 * @param { TextLeftImageRightProps }
 */
const TextLeftImageRight = ({ slice }) => (
  <section className={slice.variation}>
    <div className={`bg-${slice.primary.bgcolorselect} border-right column-padding`}>
        <div className='content-grid'>
            <span className="title">
              { 
              slice.primary.title ? 
              <PrismicRichText field={slice.primary.title}/>
              : <h1>Title!</h1>
              }
            </span>
            <span className='description'>
            {
            slice.primary.description ?
            <PrismicRichText className="ul" field={slice.primary.description}/>
            : <p>start by editing this slice from inside Slice Machine!</p>
            }
            </span>
            <div className='shadow-button-text' id="nono">    
                <PrismicLink field={slice.primary.buttonlink}><span>{slice.primary.buttontext}</span></PrismicLink>
            </div>
      </div>
    </div>

    <div className="column-padding bg-yellow">
         <div>
            <div>
              <img src={slice.primary.imageright.url} alt={slice.primary.imageright.alt} /> 
            </div>

          </div>
    </div>


    <style jsx>{`
        section {
          max-width: 100%;
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
          display: grid;
          width: 100%;
          grid-auto-columns: 1fr;
          grid-column-gap: 0px;
          grid-row-gap: 0px;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto;
          border-bottom: 2px solid #000;
        }

        .imageRightTextLeft {
          display: grid;
          width: 100%;
          grid-auto-columns: 1fr;
          grid-column-gap: 0px;
          grid-row-gap: 0px;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto;
          border-bottom: 2px solid #000;
          direction: rtl;

        }

       .rich-text /deep/ .text-ul { 
          direction: rtl;
        }


        .border-right {
          border-right: 2px solid #000;
        }

        .shadow-button-text {
          position: relative;
          z-index: 1;
          padding: 1.1rem 2rem 1.2rem;
          border-radius: 4px;
          background-color: #000;
          color: #fff;
          font-size: 1.5rem;
          text-align: center;
          text-decoration: none;
        }

        .content-grid {
          display: grid;
          width: 100%;
          max-width: 48rem;
          margin-right: 0px;
          margin-left: 0px;
          -webkit-box-align: stretch;
          -webkit-align-items: stretch;
          -ms-flex-align: stretch;
          align-items: stretch;
          -webkit-align-content: start;
          -ms-flex-line-pack: start;
          align-content: start;
          grid-auto-columns: 1fr;
          grid-column-gap: 0px;
          grid-row-gap: 3rem;
          -ms-grid-columns: 1fr;
          grid-template-columns: 1fr;
          -ms-grid-rows: auto;
          grid-template-rows: auto;
        }

    `}</style>
  </section>
)

export default TextLeftImageRight




