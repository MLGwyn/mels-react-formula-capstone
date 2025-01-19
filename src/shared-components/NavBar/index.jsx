import { useContext, useState } from "react";
import SessionContext from "contexts/SessionContext";

const NavBar = () => {
  const { username, signOut } = useContext(SessionContext);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  return (
    <nav className="flex justify-center bg bg-gradient-to-br from-emerald-800/80 to-violet-400/70 font-lato"
         onMouseLeave={()=>setUserMenuOpen(false)}>
      <div className="flex items-center justify-between w-full max-w-5xl px-8 py-2 relative">
        <div className="text-white font-playfair text-2xl flex flex-col items-center">
          <img
            className="w-10"
            src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
          />
          Rica&#39;s Plants
        </div>
        <div className="flex items-center">
          <button
            className="flex items-center text text-emerald-200"
            onClick={() => setUserMenuOpen(true)}
          >
            <i className="fa-solid fa-user mr-2 text-lg"></i>
            {username}
          </button>
          {userMenuOpen && (
            <div className="absolute rounded-lg bottom-1 right-2 bg text-violet-600/80 bg-emerald-600/50 shadow-md">
              <button className="flex px-4 py-1 hover:text-violet-700"
                      onClick={signOut}>
                <i className="fa-regular fa-right-from-bracket text-xl mr-2"></i>sign out
              </button>
            </div>
          )}
          </div>
        
        
      </div>
    </nav>
  );
};

export default NavBar;
