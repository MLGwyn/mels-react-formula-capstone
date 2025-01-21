const PlantHeading = ({ plant }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="text-4xl font-playfair">{plant.name}</div>
        <div className="text-3xl">${plant.price}</div>
      </div>
      <div className="italic text-lg my-2 pl-px text-violet-950/75">
        {plant.botanical_name}
      </div>
    </>
  );
};

export default PlantHeading;
