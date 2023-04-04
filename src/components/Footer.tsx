import Link from 'next/link';
import React from 'react';
import { LogoWhite } from './Logo';

const Footer = () => {
  return (
    <footer className="bg-[#000] py-16 text-white">
      <div className="container lg:px-28 items-start flex justify-between">
        <ul className=" block space-y-2">
          <li>
            <Link href={'/'}>
              <LogoWhite />
            </Link>
          </li>
          <li className="text-base font-openSens font-bold">
            כל הזכויות שמורות 2023
          </li>
        </ul>
        <ul className="block text-right space-y-2">
          <li className="text-base font-openSens font-bold">
            <Link href={'/'}>YouTube</Link>
          </li>
          <li className="text-base font-openSens font-bold">
            <Link href={'/'}>Meetup</Link>
          </li>
          <li className="text-base font-openSens font-bold">
            <Link href={'/'}>LinkedIn</Link>
          </li>
          <li className="text-base font-openSens font-bold">
            <Link href={'/'}>Facebook</Link>
          </li>
          <li className="text-base font-openSens font-bold">
            <Link href={'/'}>info@icda.co.il</Link>
          </li>
        </ul>
        <ul className="block text-right space-y-2">
          <li className="text-base font-openSens font-bold">
            <Link href={'/'}>אירועים</Link>
          </li>
          <li className="text-base font-openSens font-bold">
            <Link href={'/'}>מדיניות פרטיות</Link>
          </li>
        </ul>
        <ul className="block text-right space-y-3">
          <li className="text-base font-openSens font-bold">
            <Link href={'/'}>למה להצטרף</Link>
          </li>
          <li className="text-base font-openSens font-bold">
            <Link href={'/'}>השותפים שלנו</Link>
          </li>
          <li>
            <button className="btn_primary">בוגרים? הצטרפו בחינם</button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
