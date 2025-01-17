import { useContext } from "react";
import SessionContext from "contexts/SessionContext";

const NavBar = () => {
  const { username } = useContext(SessionContext);
  return (
    <nav className="flex justify-center bg bg-emerald-500 font-lato relative">
      <div className="flex items-center justify-between w-full max-w-5xl px-8 py-2">
        <div className="text-white font-playfair text-2xl flex flex-col items-center">
          <img
            className="w-10"
            src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
          />
          Rica&#39;s Plants
        </div>
        <div className="absolute bg-violet-800/20 w-full h-full right-0"></div>
        <div className="text-white">
          <button className="flex items-center"><i className="fa-solid fa-user mr-2 text-lg"></i>{username}</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
