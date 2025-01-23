import { useState, useEffect } from "react";
import {motion} from "framer-motion"
import NavBar from "shared-components/NavBar";
import RedirectToSignInIfSignedOut from "shared-components/RedirectToSignInIfSignedOut";
import PlantItem from "./PlantItem";
import * as plantService from "services/plant";
import LoadingSpinner from "shared-components/LoadingSpinner";

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
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="bg-violet-200 min-h-screen">
          <div className="flex justify-center py-24">
            <div className="w-full max-w-5xl">
              <div className="font-playfair text-4xl text-emerald-700 mb-6 px-4">
                Plants In Stock
              </div>
              <div className="flex flex-wrap justify-center">
                {plants.map((plant, idx) => (
                  <motion.div 
                  initial={{opacity:0,translateY:"20px"}}
                  whileInView={{opacity:1, translateY:0}}
                  viewport={{once:true}}
                  transition={{delay:(idx % 3)*0.2, duration:0.4}}
                  key={plant.id}>
                    <PlantItem plant={plant} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
      </div>
        )}
    </RedirectToSignInIfSignedOut>
  );
};

export default PlantListPage;
