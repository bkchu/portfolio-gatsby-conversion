import React from 'react';

const Techs = ({ techs }) => {
  let techsDisplay = techs.split(',').map(tech => (
    <li key={tech} className="Techs__tech">
      #{tech}
    </li>
  ));
  return <ul className="Techs">{techsDisplay}</ul>;
};

export default Techs;
