import { useState, useEffect } from "react";
import NavBar from "shared-components/NavBar";
import RedirectToSignInIfSignedOut from "shared-components/RedirectToSignInIfSignedOut";
import PlantItem from "./PlantItem";
import * as plantService from "services/plant";

const PlantListPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await plantService.getPlants();
      const data = await response.json();
      setPlants(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <RedirectToSignInIfSignedOut>
      <NavBar />
      <div className="bg-violet-200 min-h-screen">
        {isLoading ? (
          <div className="flex justify-center pt-80">
            <i className="fa-duotone fa-solid fa-spinner animate-spin text-4xl text-emerald-700/90"></i>
          </div>
        ) : (
          <div className="flex justify-center py-24">
            <div className="w-full max-w-5xl border border-red-500">
              <div className="font-playfair text-4xl text-emerald-700 mb-6">
                Plants In Stock
              </div>
              <div className="flex flex-wrap justify-center">
                {plants.map((plant, idx) => (
                  <PlantItem key={idx} plant={plant} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </RedirectToSignInIfSignedOut>
  );
};

export default PlantListPage;
