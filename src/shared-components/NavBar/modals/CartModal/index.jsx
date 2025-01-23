import { useContext, useState, useEffect, useCallback } from "react";
import{motion} from "framer-motion"
import clsx from "clsx";
import SessionContext from "contexts/SessionContext";
import LoadingSpinner from "shared-components/LoadingSpinner";
import * as cartService from "services/cart";
import CartItem from "./CartItem";

const CartModal = () => {
  const { username } = useContext(SessionContext);
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState([]);

  const fetchCart = useCallback(
    () =>
      (async () => {
        setIsLoading(true);
        const response = await cartService.getCart();
        const data = await response.json();
        setCart(data);
        setIsLoading(false);
      })(),
    []
  );
  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  let totalQuantity = 0;
  let subtotal = 0;
  for (let item of cart) {
    totalQuantity += item.quantity;
    subtotal += item.quantity * item.price_per_unit;
  }

  return (
    
        <motion.div 
        initial={{translateX:"100%"}}
        animate={{translateX:0}}
        transition={{duration:0.5}}
        className="bg-violet-200 w-full max-w-xl h-screen flex flex-col">

          <div className="bg bg-gradient-to-br from-emerald-900 to-violet-400 font-playfair text-3xl shadow-md text-violet-200 py-8 text-center">
            {username}&#39;s cart
          </div>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <div className="flex-1 overflow-y-auto pb-20">
                {cart.map((item, idx) => (
                  <div
                    key={item.id}
                    className={clsx(
                      "mx-5 mt-8 pt-8",
                      idx != 0 && "border-t border-violet-300"
                    )}
                  >
                    <CartItem item={item} fetchCart={fetchCart} />
                  </div>
                ))}
              </div>
              <div className="flex flex-col border-t border-violet-400 text-slate-600">
                <div className="flex justify-between py-4 mx-8">
                  <div>{totalQuantity} items</div>
                  <div className="">
                    subtotal{" "}
                    <span className="ml-2 text-lg text-emerald-900">
                      ${subtotal}
                    </span>
                  </div>
                </div>
                <button
                  className="flex justify-center items-center py-3 mx-3 text-lg mb-4 bg-emerald-800/70 text-violet-200 rounded-full"
                  onClick={() =>
                    alert(" YOU'VE BEEN FOOLED! This is not a real site silly!")
                  }
                >
                  checkout
                  <i className="fa-solid fa-light fa-cart-circle-check text-2xl ml-1 text-violet-200"></i>
                </button>
              </div>
            </>
          )}
        </motion.div>

  );
};
export default CartModal;
