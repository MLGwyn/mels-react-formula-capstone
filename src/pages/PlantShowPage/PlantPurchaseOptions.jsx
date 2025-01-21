import clsx from "clsx";
import { POT_COLORS } from "shared-components/util";
const PlantPurchaseOptions = ({ plant, imageIdx, setImageIdx }) => {
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
            <div className={clsx("mt-1", imageIdx === idx ? "text-emerald-900 font-bold" 
                  : "text-slate-700")}>{image.pot_color}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantPurchaseOptions;
