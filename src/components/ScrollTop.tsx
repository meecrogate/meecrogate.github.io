import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly scroll to the top left of the page
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything visually
};

export default ScrollToTop;