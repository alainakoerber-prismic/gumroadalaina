import { PrismicText, PrismicLink } from '@prismicio/react'


export const Menu = ({ menu }) => {
    return ( 
        <nav>
            <PrismicLink field={menu.data.login_link2}><span>{menu.data.login_label}</span></PrismicLink>
            <PrismicLink field={menu.data.sale_link2}><span>{ menu.data.sale_label }</span></PrismicLink>
            <ul>
                { menu.data?.menu_group.map((item, i) => 
                <li key={i}>
                <PrismicLink field={item.menu_item} >
                <span >{ item.menu_label }</span>
                </PrismicLink>
                </li>
                
                )
            }
            </ul>
        </nav>
    )
}


