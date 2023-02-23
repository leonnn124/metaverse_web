'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import style from '../styles';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${style.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />

    <div className={`${style.innerWidth} mx-auto flex justify-between gap-8`}>
      <Image
        src="/search.svg"
        alt="search"
        width={100}
        height={100}
        priority
        className="w-[24px] h-[24px] object-contain"
      />

      <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
        METAVERSE
      </h2>

      <Image
        src="/menu.svg"
        alt="menu"
        width={100}
        height={100}
        priority
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
