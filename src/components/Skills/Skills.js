import React from 'react';
import Page from '../Page/Page';
import skills from './skill_util';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsVariants = {
    opened: {
      transition: { staggerChildren: 0.07, delayChildren: 1 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const skillVariants = {
    opened: {
      y: 0,
      opacity: 1,
      transition: {
        y: { type: 'spring', stiffness: 50 }
      }
    },
    closed: {
      y: 20,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  return (
    <Page title="Skills">
      <motion.div
        initial="closed"
        animate="opened"
        variants={skillsVariants}
        className="Skills"
      >
        {skills[0] &&
          skills.map(({ skill, img, url }, i) => (
            <motion.div variants={skillVariants} className="Skill" key={i}>
              <p className="Skill__title">{skill}</p>
              <a
                className="Skill__link"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="Skill__img" src={img} alt={skill} />
              </a>
            </motion.div>
          ))}
      </motion.div>
    </Page>
  );
};

export default Skills;
