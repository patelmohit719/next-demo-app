'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

const classnames = {
  background: 'var(--green)',
  height: '4px',
  position: 'sticky',
  top: '0',
  transformOrigin: '0%',
};

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    damping: 30,
    restDelta: 0.001,
    stiffness: 100,
  });

  return (
    <>
      <motion.div style={{ scaleX, ...classnames }} />
      <header className="fixed top-0 left-0 w-full text-white p-4 z-10">
        <nav className="mx-auto flex justify-between">
          <div className="text-lg font-bold">Logo</div>
          <ul className="flex space-x-4">
            <li><a className="hover:underline" href="#about">About</a></li>
            <li><a className="hover:underline" href="#experience">Experience</a></li>
            <li><a className="hover:underline" href="#section3">Work</a></li>
            <li><a className="hover:underline" href="#section3">Contact</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
