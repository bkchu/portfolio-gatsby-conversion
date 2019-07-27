import React from 'react';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerVariants = {
    hidden: {
      y: '100%',
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1,
        y: { type: 'spring', stiffness: 20 }
      }
    }
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={footerVariants}
      className="Footer"
    >
      <div className="Footer__networks">
        <a
          href="https://github.com/bkchu"
          rel="noopener noreferrer"
          target="_blank"
          className="network link"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a
          href="https://www.linkedin.com/in/bkchuu"
          rel="noopener noreferrer"
          target="_blank"
          className="network link"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
        </a>
      </div>
      <div className="Footer__contact">
        <a className="link Footer__info" href="tel:4693890119">
          <p>(469) 389-0119</p>
        </a>
        <a
          className="link Footer__info"
          href="mailto:brandon@bkchu.dev"
        >
          <p>brandon@bkchu.dev</p>
        </a>
      </div>
    </motion.div>
  );
};

export default Footer;
