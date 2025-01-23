import { RemoveScroll } from "react-remove-scroll";
import { useRef } from "react";
const ModalWrapper = ({ children, isOpen, onCloseClick }) => {
  const backgroundRef = useRef();
  if (!isOpen) {
    return null;
  }
  return (
    <RemoveScroll>
      <div
        ref={backgroundRef}
        className="fixed font-lato top-0 left-0 flex justify-end items-start w-full h-full bg-black/30 backdrop-blur-sm"
        onClick={(e) => {
          if (e.target === backgroundRef.current) {
            onCloseClick();
          }
        }}
      >
        <button className="absolute p-3 top-0 right-0" onClick={onCloseClick}>
          <i className="fa-solid fa-circle-xmark text-3xl text-emerald-300/40"></i>
        </button>
        {children}
      </div>
    </RemoveScroll>
  );
};

export default ModalWrapper;
