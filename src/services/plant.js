import apiFetch from "./apiFetch";

export const getPlants = () => apiFetch("GET", "/plants");

export const getPlant = ({id}) => apiFetch("GET", `/plants/${id}`)
