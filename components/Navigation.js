import { PrismicLink, PrismicText } from '@prismicio/react';

export function Navigation({ navigation }) {
  return (
    <nav>
      <ul>
        {/* Renders top-level links. */}
        {navigation.data?.slices.map((slice) => {
          return (
            <li className='parent' key={slice.id}>
              <PrismicLink field={slice.primary.link}>
                <PrismicText field={slice.primary.name} />
              </PrismicLink> 
              {/* Renders child links, if present. */}
              {slice.items.length > 0 && (
                <ul className='child'>
                  {slice.items.map((item, i) => {
                    return (
                      <li key={i}>
                        <PrismicLink field={item.link}>
                          <PrismicText field={item.name} />
                        </PrismicLink>
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })}
      </ul>

    <style jsx>{`
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
    `}</style>
    </nav>
  )
}

