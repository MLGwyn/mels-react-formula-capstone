import { useState } from "react";
import { Link } from "react-router-dom";
import { POT_COLORS, getRandoIdx } from "shared-components/util";
import clsx from "clsx";


const PlantItem = ({ plant }) => {
  const [imageIdx, setImageIdx] = useState(()=>getRandoIdx(plant.images));
  return (
    <div className="mx-5 my-8">
      <Link to={`/plants/${plant.id}`}>
      <img
        className="w-[280px] h-[320px] rounded-md"
        src={plant.images[imageIdx].src}
      />
      </Link>
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
                  "w-4 h-4 rounded-full m-[2px] border border-violet-400",
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
