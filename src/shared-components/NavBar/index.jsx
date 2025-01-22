import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SessionContext from "contexts/SessionContext";
import CartModal from "./modals/CartModal";

const NavBar = () => {
  const { username, signOut } = useContext(SessionContext);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <>
      <nav
        className="flex justify-center bg bg-gradient-to-br from-emerald-900/80 to-violet-400/70 font-lato"
        onMouseLeave={() => setUserMenuOpen(false)}
      >
        <div className="flex items-center justify-between w-full max-w-5xl px-8 py-2 relative">
          <Link
            to="/plants"
            className="text-white font-playfair text-2xl flex flex-col items-center"
          >
            <img
              className="w-10"
              src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
            />
            Mel&#39;s Plants
          </Link>
          <div className="flex items-center text-violet-200">
            <button
              className="flex items-center"
              onClick={() => setUserMenuOpen(true)}
            >
              <i className="fa-solid fa-user mr-2 text-xl"></i>
              {username}
            </button>
            {userMenuOpen && (
              <div className="absolute rounded-lg bottom-1 right-2 bg text-violet-600/80 bg-emerald-600/50 shadow-md">
                <button
                  className="flex px-4 py-1 hover:text-violet-700"
                  onClick={signOut}
                >
                  <i className="fa-regular fa-right-from-bracket text-xl mr-2"></i>
                  sign out
                </button>
              </div>
            )}
            <button
              className="flex items-center ml-4"
              onClick={() => setCartOpen(true)}
            >
              <i className="fa-solid fa-cart-shopping text-xl mr-2"></i>cart
            </button>
          </div>
        </div>
      </nav>
      {cartOpen && <CartModal setCartOpen={setCartOpen} />}
    </>
  );
};

export default NavBar;
