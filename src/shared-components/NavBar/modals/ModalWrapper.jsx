import { RemoveScroll } from "react-remove-scroll";
import { useRef } from "react";
import {motion} from "framer-motion"
const ModalWrapper = ({ children, isOpen, onCloseClick }) => {
  const backgroundRef = useRef();
  if (!isOpen) {
    return null;
  }
  return (
    <RemoveScroll>
      <div
        ref={backgroundRef}
        className="fixed font-lato top-0 left-0 flex justify-end items-start w-full h-full bg-black/30 backdrop-blur-sm z-20"
        onClick={(e) => {
          if (e.target === backgroundRef.current) {
            onCloseClick();
          }
        }}
      >
        <motion.button 
          initial={{opacity:0}}
          animate={{opacity:1}}
        transition={{delay:0.5,duration:0.5}}
          className="absolute p-3 top-0 right-0" onClick={onCloseClick}>
          <i className="fa-solid fa-circle-xmark text-3xl text-emerald-300/40"></i>
        </motion.button>
        {children}
      </div>
    </RemoveScroll>
  );
};

export default ModalWrapper;
