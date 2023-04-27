
import React, { useRef, useEffect } from 'react';

function ScrollableBox({ children }) {
  const scrollableBoxRef = useRef(null);

  useEffect(() => {
    const scrollableBox = scrollableBoxRef.current;
    scrollableBox.scrollTop = scrollableBox.scrollHeight;
  }, []);

  return (
    <div ref={scrollableBoxRef} className=" experience-box border border-gray-800 overflow-y-scroll">
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}

export default ScrollableBox;
