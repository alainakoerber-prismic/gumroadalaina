import { PrismicLink } from '@prismicio/react'


export const Menu = ({ menu }) => {
    return ( 
        <nav className='nav-container'>
            <ul className='nav-menu li'>
                {menu.data?.menu_group.map((item, i) => 
                <li key={i}>
                <PrismicLink field={item.menu_item} >
                <a>{ item.menu_label }</a>
                </PrismicLink>
                </li>
                
                )
            }
            </ul>
            <ul className='nav-menu-secondary li'>
                <li><PrismicLink field={menu.data.login_link2}><a>{menu.data.login_label}</a></PrismicLink></li>
                <li><PrismicLink field={menu.data.sale_link2}><a>{ menu.data.sale_label }</a></PrismicLink></li>
            </ul>

<style jsx>{`

    .nav-container {
        display: flex;
        max-width: 100%;
        padding-right: 0vw;
        padding-left: 2vw;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid #000;
        border-top: 2px solid #000;
        transition: all 600ms ease;
    }
    
    .nav-menu {
        display: flex;
        margin-right: auto;
        margin-left: 0px;
        align-items: center;
        transition: margin 600ms ease-in-out, flex 600ms ease-in-out;
    }

    .nav-menu-secondary {
        display: flex;
        margin-right: 0px;
        align-items: center;
        border-left: 2px solid #000;
        transition: margin 600ms ease-in-out, flex 600ms ease-in-out;
    }

    li {
        list-style-type: none;
        margin: 0;
        padding: 0px 16px;
        float: left;
        background-color: #fff;
    }

    a {
        display: block;
        padding: 8px;
      }
    

  `}</style>
  </nav>

)
}
