import { useEffect } from "react";

const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (isLocked) {
      // Prevent scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Allow scrolling
      document.body.style.overflow = "";
    }

    return () => {
      // Cleanup on unmount
      document.body.style.overflow = "";
    };
  }, [isLocked]);
};

export default useScrollLock;
