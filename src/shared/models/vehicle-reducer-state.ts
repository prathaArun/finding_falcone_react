import { IUpdatedVehcileProps } from "./updated-vehicle-props";
import { IVehicleResponseDTO } from "./vehicle-response.dto";

export interface IVehicleReducerState {
    vehicleCollection1: IUpdatedVehcileProps[];
    vehicleCollection2: IUpdatedVehcileProps[];
    vehicleCollection3: IUpdatedVehcileProps[];
    vehicleCollection4: IUpdatedVehcileProps[];
    defaultCollection: IVehicleResponseDTO[];
    totalTime: number;
}