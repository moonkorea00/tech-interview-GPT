import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import NavList from '../NavList';
import hamburger from '@assets/Nav/hamburger.svg';
import useOnClickOutside from '@hooks/useOnClickOutside';

const NavBar = () => {
  const [isNavListVisible, setIsNavListVisible] = useState(false);
  const navRef = useRef(null);

  useOnClickOutside(navRef, () => setIsNavListVisible(false));

  const toggleNavBar = () => setIsNavListVisible(false);

  return (
    <nav className="hidden lg:flex flex-col w-full" ref={navRef}>
      <div className="flex justify-between items-center w-full h-[50px] px-4 bg-[#343541]">
        <img
          src={hamburger}
          alt="menu"
          className="h-[40px] py-1 hover:opacity-60 cursor-pointer"
          onClick={() => setIsNavListVisible(prev => !prev)}
        />
        <Link to="/" >
          <span className="text-[#E4E7EB] text-4xl sm:text-3xl" onClick={toggleNavBar}>&#43;</span>
        </Link>
      </div>
      {isNavListVisible && (
        <div className="flex flex-col items-start pt-1 pb-2 pl-5 text-[#E4E7EB] bg-[#343541]">
          <NavList toggleNavBar={toggleNavBar} />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
