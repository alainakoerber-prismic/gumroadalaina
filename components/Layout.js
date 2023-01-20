import { PrismicLink } from '@prismicio/react';
// import { Header } from "./Header";
// import { Footer } from "./Footer";
import { Menu } from './Menu.js';
// import { menu } from './Navigation.js';

export const Layout = ({
  menu,
  children,
}) => {
  return (
    <div>
      <Menu menu={menu} />
      <main>{children}</main>
    </div>
  );
};
