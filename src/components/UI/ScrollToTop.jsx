import React, { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const landPage = document.getElementById("landpage");
    
    const toggleVisibility = () => {
      if (landPage) {
        const rect = landPage.getBoundingClientRect();
        if (rect.bottom < 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={handleScrollToTop}
        className="fixed bottom-4 right-4 bg-orange-500 text-white border-[3px] border-white !p-3 text-xl  rounded-full shadow-lg hover:bg-orange-600  transition-all z-50"
          aria-label="Scroll to top"
      >
        <MdKeyboardDoubleArrowUp className="hover:!pb-1 transition-all"/>
      </button>
    )
  );
};

export default ScrollToTop;
