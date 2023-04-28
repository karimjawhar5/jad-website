
import React, { useRef, useEffect } from 'react';

function ScrollableBox({ children }) {
  const scrollableBoxRef = useRef(null);

  useEffect(() => {
    const scrollableBox = scrollableBoxRef.current;
    scrollableBox.scrollTop = scrollableBox.scrollHeight;
  }, []);

  return (
    <div ref={scrollableBoxRef} className=" experience-box border border-gray-200 dark:border-gray-800 overflow-y-scroll">
      <div className=" p-2 md:px-4 py-2">
        {children}
      </div>
    </div>
  );
}

export default ScrollableBox;
