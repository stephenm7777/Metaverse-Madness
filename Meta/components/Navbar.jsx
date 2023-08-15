'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

// Define the 'Navbar' functional component.
const Navbar = () => (
  // Define the animated navigation bar using 'motion.nav'.
  <motion.nav
    // Apply animation variants defined in 'navVariants'.
    variants={navVariants}
    // Set initial animation state as 'hidden'.
    initial='hidden'
    // Animation state to transition to when the element is in view, 'show' in this case.
    whileInView='show'
    // Apply CSS classes for styling and layout.
    className={`${styles.xPaddings} py-8 relative`}
  >
    {/* Create a gradient background overlay using an absolute positioned div. */}
    <div className='absolute w-[50%] inset-0 gradient-01' />
    {/* Create a flex container with inner padding and alignment. */}
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      {/* Display a search icon using an image element. */}
      <img 
        src='/search.svg'
        alt='search'
        className='w-[24px] h-[24px] object-contain' 
      />
      {/* Display the main title 'MetaVerse'. */}
      <h2 className='font-extrabold text-[24px] leading-[30px] text-white'>
        MetaVerse 
      </h2>
      {/* Display a menu icon using an image element. */}
      <img 
        src='/menu.svg'
        alt='menu'
        className='w-[24px] h-[24px] object-contain'
      />
    </div>
  </motion.nav>
);

// Export the 'Navbar' component as the default export.
export default Navbar;
