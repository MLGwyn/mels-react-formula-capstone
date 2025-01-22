import * as cartServices from "services/cart";

const CartItem = ({ item, fetchCart }) => {
  return (
    <div className="flex mx-6 my-8">
      <img className="w-28 rounded-md" src={item.image_src} />
      <div className="flex justify-between flex-1">
        <div className="mx-4 flex flex-col">
          <div className="text-2xl my-1 font-playfair text-emerald-900">
            {item.plant_name}
          </div>
          <div className="flex text-sm my-1 text-slate-800">
            <div className="w-12 text-slate-600">qty:</div>
            {item.quantity}
          </div>
          <div className="text-sm flex my-1 text-slate-800">
            <div className="w-12 text-slate-600">color:</div>
            {item.pot_color}
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex text-xl text-emerald-800 font-playfair">
            ${item.quantity * item.price_per_unit}
          </div>
          <button
            className="items-center text-slate-700 text-sm hover:text-red-900"
            onClick={async () => {
              await cartServices.removeItemFromCart(item.id );
              fetchCart();
            }}
          >
            <i className="fa-regular fa-trash mr-1"></i>remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
