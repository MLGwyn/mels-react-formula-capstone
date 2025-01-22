import { useContext, useState, useEffect } from "react";
import { RemoveScroll } from "react-remove-scroll";
import SessionContext from "contexts/SessionContext";
import LoadingSpinner from "shared-components/LoadingSpinner";
import * as cartService from "services/cart";
import CartItem from "./CartItem";

const CartModal = ({ setCartOpen }) => {
  const { username } = useContext(SessionContext);
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await cartService.getCart();
      const data = await response.json();
      setCart(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <RemoveScroll>
      <div className="fixed font-lato top-0 left-0 flex justify-end w-full h-full bg-black/30 backdrop-blur-sm">
        <div className="bg-violet-200 w-full max-w-xl h-screen">
          <div className="bg bg-gradient-to-br from-emerald-900 to-violet-400 font-playfair text-3xl shadow-md text-violet-200 py-8 text-center">
            {username}&#39;s cart
          </div>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <div>
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
        <button className="absolute p-3" onClick={() => setCartOpen(false)}>
          <i className="fa-solid fa-circle-xmark text-3xl text-emerald-300/40"></i>
        </button>
      </div>
    </RemoveScroll>
  );
};
export default CartModal;
