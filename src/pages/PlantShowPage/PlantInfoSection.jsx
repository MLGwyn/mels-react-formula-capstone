import { useState } from "react";
import BenefitBox from "./BenefitBox";
import PlantHeading from "./PlantHeading";
import PlantPurchaseOptions from "./PlantPurchaseOptions";
import { getRandoIdx } from "shared-components/util";

const PlantInfoSection = ({ plant }) => {
  const [imageIdx, setImageIdx] = useState(() => getRandoIdx(plant.images));
  return (
    <div className="flex justify-center bg-violet-200 font-lato text-emerald-900">
      <div className="w-full max-w-5xl px-8 py-24 min-h-screen">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col flex-1">
            <div className="block mb-6 md:hidden">
              <PlantHeading plant={plant} />
            </div>
            <img className="rounded-lg" src={plant.images[imageIdx].src} />
            <div className="flex mt-4">
              
                <BenefitBox
                  icon="far fa-check-circle"
                  title="Guaranteed Healthy"
                  description="Guaranteed to arrive healthy or your money back"
                />
                <div className="bg-slate-400 w-px"></div>
                <BenefitBox
                  icon="fa-duotone fa-regular fa-truck-fast"
                  title="Free Shipping"
                  description="Get ground free shipping on orders of $50 or more"
                />
              
            </div>
          </div>
          <div className="flex flex-col flex-1 md:px-8">
            <div className="hidden md:block">
              <PlantHeading plant={plant} />
            </div>
            <p className="mt-4 text-slate-700 leading-relaxed">
              {plant.description}
            </p>
              <PlantPurchaseOptions plant={plant} imageIdx={imageIdx}setImageIdx={setImageIdx} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantInfoSection;
