import { IUpdatedVehcileProps } from "./updated-vehicle-props";

export interface IVehicleProps {
    updatedVehicleCollections: IUpdatedVehcileProps[];
    planetSelected: string;
    selectedVehicleCallback: (data: string)=>void;
  }