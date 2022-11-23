import { PrismicLink } from '@prismicio/react';
// import { Header } from "./Header";
// import { Footer } from "./Footer";
// import { Menu } from './Menu';
import { Navigation } from './Navigation.js';

export const Layout = ({
  navigation,
  children,
}) => {
  return (
    <div className="text-slate-700">
      <Navigation navigation={navigation} />
      <main>{children}</main>
    </div>
  );
};
