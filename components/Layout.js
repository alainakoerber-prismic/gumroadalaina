import { Menu } from './Menu.js';

export const Layout = ({
  menu, 
  altLangs,
  children,
}) => {

  return (
    <div>
      <Menu menu={menu} altLangs={altLangs} />
      <main>{children}</main>
    </div>
  );
};
