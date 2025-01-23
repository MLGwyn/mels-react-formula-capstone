import { useContext } from "react";
import { motion } from "framer-motion";
import SessionContext from "contexts/SessionContext";

const MobileMenuModal = ({ onCartOpenClick }) => {
  const { username, signOut } = useContext(SessionContext);
  return (
    <motion.div
      initial={{ translateY: "-100%" }}
      animate={{ translateY: 0 }}
      transition={{duration:0.5}}
    
      className="flex flex-col pt-12 pr-12 text-lg items-start rounded-bl-lg pb-6 text-violet-200/70 bg bg-gradient-to-br from-emerald-900 to-violet-400"
    >
      <div className="px-8 py-4">
        <i className="fa-solid fa-user mr-2 text-xl"></i>
        {username}
      </div>
      <button
        className="flex hover:text-violet-900 px-8 py-4"
        onClick={signOut}
      >
        <i className="fa-regular fa-right-from-bracket text-xl mr-2"></i>
        sign out
      </button>
      <button
        className="flex items-center px-8 py-4 hover:text-violet-900"
        onClick={onCartOpenClick}
      >
        <i className="fa-solid fa-cart-shopping text-xl mr-2"></i>cart
      </button>
    </motion.div>
  );
};
export default MobileMenuModal;
