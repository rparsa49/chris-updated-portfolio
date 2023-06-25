import React, { useState, useEffect } from 'react';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPopup(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  if (!showPopup) {
    return null;
  }

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/christopher-nielsen-ab6233205/', '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <p className="text-lg text-center mb-4">Click here to connect with me on Linkedin!</p>
        <button
          className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2 text-lg"
          onClick={handleLinkedInClick}
        >
          Visit LinkedIn
        </button>
      </div>
    </div>
  );
};

export default Popup;
