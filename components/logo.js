import { useState } from 'react';
import Link from 'next/link';
import styles from './hamburger.module.css';

const Logo = ({ navToggle }) => {
  return (
    <div className="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
      <div id="logo" className="logo">
        <Link href="/">
          <a className="text-2xl md:text-3xl font-bold uppercase tracking-tighter leading-tight md:pr-8">
            Muai Thai Gym
          </a>
        </Link>
      </div>
      <button
        className={`${styles.hamburger} block sm:hidden focus:outline-none `}
        type="button"
        onClick={navToggle}
      >
        <span
          className={`${styles.hamburger.top_bun}  w-10 h-1 bg-black block absolute rotate-0 -translate-x-2`}
        ></span>
        <span className="w-10 h-1 bg-black block absolute rotate-0 translate-y-2"></span>
        <span className="w-10 h-1 bg-black block absolute rotate-0 translate-y-4"></span>
      </button>
    </div>
  );
};

export default Logo;
