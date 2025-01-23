import { useState } from "react";
import clsx from "clsx";
import { POT_COLORS } from "shared-components/util";
import * as cartService from "services/cart";

const PlantPurchaseOptions = ({ plant, imageIdx, setImageIdx }) => {
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="my-10">
      <div className="flex text-emerald-900">
        <i className="fa-solid fa-brush text-2xl mr-2"></i>
        <div className="text-lg font-playfair">Pot Colors</div>
      </div>
      <div className="flex my-4">
        {plant.images.map((image, idx) => (
          <div
            key={image.pot_color}
            className="flex flex-col items-center mx-2"
            onMouseEnter={() => {
              {
                setImageIdx(idx);
              }
            }}
          >
            <div
              className={clsx(
                "w-10 h-10 rounded-full m-[2px] border border-violet-400",
                POT_COLORS[image.pot_color],
                imageIdx === idx &&
                  "outline outline-2 outline-offset-2 outline-emerald-900"
              )}
            >
              {" "}
            </div>
            <div
              className={clsx(
                "mt-1",
                imageIdx === idx
                  ? "text-emerald-900 font-bold"
                  : "text-slate-700"
              )}
            >
              {image.pot_color}
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-10">
        <div className="rounded-full border-2 border-emerald-900 flex items-center px-3 py-4 text-xl">
          <button
            onClick={() => {
              if (quantity > 1) setQuantity(quantity - 1);
            }}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <div className="text-4xl px-3">{quantity}</div>
          <button onClick={() => setQuantity(quantity + 1)}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <button
          className="rounded-full bg bg-gradient-to-br from-emerald-900/80 to-violet-400/70 text-violet-100 flex flex-1 text-xl items-center justify-center mx-2 hover:bg hover:bg-gradient-to-br hover:from-violet-400/70 hover:to-emerald-900/80 hover:text-emerald-950"
          onClick={async () => {
            setIsLoading(true);
            const response = await cartService.addPlantToCart({
              quantity,
              plantId: plant.id,
              potColor: plant.images[imageIdx].pot_color,
            });
            setIsLoading(false);
            console.log(response.status);
          }}
        >
          {isLoading ? (
            <i className="fa-regular fa-spinner-scale animate-spin mr-3 text-3xl"></i>
          ) : (
            <i className="mr-3 text-3xl fa-duotone fa-solid fa-cart-plus"></i>
          )}
          add to cart
        </button>
      </div>
    </div>
  );
};

export default PlantPurchaseOptions;
