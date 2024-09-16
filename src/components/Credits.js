import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-4">
      <div className="container mx-auto text-center text-white">
        <p className="text-sm">
          C. Nielsen {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
