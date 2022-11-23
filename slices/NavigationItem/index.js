import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { Layout } from '../../components/Layout'

/**
 * @typedef {import("@prismicio/client").Content.NavigationItemSlice} NavigationItemSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NavigationItemSlice>} NavigationItemProps
 * @param { NavigationItemProps }
 */
const NavigationItem = ({ slice }) => (
  <section>
    <nav>
      <Layout navigation={navigation}></Layout>
    </nav>
    
    {/* <style jsx>{`
        .parent {
          display: block;
          position: relative;
          float: left;
          line-height: 30px;
          background-color: #4FA0D8;
          border-right: #CCC 1px solid;
        }
        
        .parent a {
          margin: 10px;
          color: #FFFFFF;
          text-decoration: none;
        }
        
        .parent:hover>ul {
          display: block;
          position: absolute;
        }
        
        .child {
          display: none;
        }
        
        .child li {
          background-color: #E4EFF7;
          line-height: 30px;
          border-bottom: #CCC 1px solid;
          border-right: #CCC 1px solid;
          width: 100%;
        }
        
        .child li a {
          color: #000000;
        }
        
        ul {
          list-style: none;
          margin: 0;
          padding: 0px;
          min-width: 10em;
        }
        
        ul ul ul {
          left: 100%;
          top: 0;
          margin-left: 1px;
        }
        
        li:hover {
          background-color: #95B4CA;
        }
        
        .parent li:hover {
          background-color: #F0F0F0;
        }
        
        .expand {
          font-size: 12px;
          float: right;
          margin-right: 5px;
        }
    `}</style> */}
  </section>
)

export default NavigationItem