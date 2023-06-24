import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-4">
      <div className="container mx-auto text-center text-white">
        <p className="text-sm">
          Created by Roya Parsa &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
