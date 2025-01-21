import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "shared-components/NavBar";
import * as plantService from "services/plant";
import LoadingSpinner from "shared-components/LoadingSpinner";
import PlantInfoSection from "./PlantInfoSection";

const PlantShowPage = () => {
  const { plantId } = useParams();
  const [plant, setPlant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await plantService.getPlant({ id: plantId });
      setPlant(await response.json());
      setIsLoading(false);
    })();
  }, [plantId]);
  return (
    <>
      <NavBar />
      {isLoading ? <LoadingSpinner /> : <PlantInfoSection plant={plant} />}
    </>
  );
};

export default PlantShowPage;
