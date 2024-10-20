"use client"
import { ChevronUpIcon } from "@heroicons/react/24/solid"; // v2 import path
import styles from "./chevronUpIcon.module.css";




const ScrollToTop = () => {
   
  return (
    <a href="#top"

     className={styles.button} aria-label="Scroll to Top">
      <ChevronUpIcon className="h-6 w-6 text-gray-800" />
    </a>
  );
};

export default ScrollToTop;
