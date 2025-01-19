import { useState } from "react";
import clsx from "clsx";

const POT_COLORS = {
  stone: "bg-stone-200",
  slate: "bg-slate-300",
  sky: "bg-sky-700",
  black: "bg-gray-600",
  white: "bg-gray-50",
  amber: "bg-amber-600",
};

const getRandoIdx = (array) =>{
  return Math.floor(Math.random() * array.length)
}

const PlantItem = ({ plant }) => {
  const [imageIdx, setImageIdx] = useState(()=>getRandoIdx(plant.images));
  return (
    <div className="mx-5 my-8">
      <img
        className="w-[280px] h-[320px] rounded-md"
        src={plant.images[imageIdx].src}
      />
      <div className="px-2 my-3">
        <div className="flex justify-between">
          <div className="font-playfair text-xl text-emerald-800">
            {plant.name}
          </div>
          <div className="font-lato text-emerald-800">${plant.price}</div>
        </div>
        <div className="flex justify-between mt-1">
          <div className="text-sm text-violet-950/60 font-lato">
            {plant.images[imageIdx].pot_color}
          </div>
          <div className="flex">
            {plant.images.map((image, idx) => (
              <div
                key={idx}
                className={clsx(
                  "w-4 h-4 rounded-full m-[2px] border border-slate-300",
                  POT_COLORS[image.pot_color],
                  imageIdx === idx && "outline outline-1 outline-offset-2 outline-red-500" 
                )}
                onMouseEnter={()=>{{setImageIdx(idx)}}}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantItem;
