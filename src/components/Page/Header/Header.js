import React from 'react';

const Header = ({ title }) => {
  return (
    <div className="Header">
      <div className="container">
        <div className="title">{title.toUpperCase()}</div>
      </div>
    </div>
  );
};

export default Header;
