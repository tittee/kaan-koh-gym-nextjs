import { useState, useEffect } from 'react';
import Logo from './logo';
import NavMenu from './nav-menu';

const Header = ({ menus }) => {
  const [open, setOpen] = useState(false);
  const [scroll, setScrool] = useState(false);

  const navToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 1) {
        setScrool(true);
      } else {
        setScrool(false);
      }
    };
  }, []);

  console.log(scroll);

  return (
    <>
      <header
        className={`${
          scroll ? 'top-0' : ''
        } w-full flex flex-col fixed sm:relative bg-white z-10`}
      >
        <div className="container mx-auto ">
          <nav className="flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 md\:px-0 lg:px-0 py-1 bg-white shadow sm:shadow-none">
            <Logo navToggle={navToggle} />
            <NavMenu menus={menus} open={open} />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
