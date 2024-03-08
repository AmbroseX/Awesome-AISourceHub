import React, { useState, useEffect } from 'react';
import { FaCircleChevronDown, FaCircleChevronUp } from "react-icons/fa6";

const TopDownButton = () => {
  const [showButton, setShowButton] = useState<'top' | 'bottom' | 'both' | null>(null);

  useEffect(() => {
    const checkScroll = () => {
      const scrolledFromTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const totalHeight = document.body.scrollHeight;

      if (scrolledFromTop + viewportHeight >= totalHeight) {
        setShowButton('top');
      } else if (scrolledFromTop === 0) {
        setShowButton('bottom');
      } else {
        setShowButton('both');
      }
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // 初始化时也检查一次

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <>
    
      {(showButton === 'top' || showButton === 'both') && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-[10%] right-0 z-50 m-5 sm:m-0 py-3"
          aria-label="Scroll to top"
        >
          <FaCircleChevronUp size="3em"/>
        </button>
      )}

      {(showButton === 'bottom' || showButton === 'both') && (
        <button
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          className="fixed bottom-[5%] right-0 z-50 m-5 sm:m-0 "
          aria-label="Scroll to bottom"
        >
          <FaCircleChevronDown size="3em"/>
        </button>
      )}
    </>
  );
};

export default TopDownButton;
