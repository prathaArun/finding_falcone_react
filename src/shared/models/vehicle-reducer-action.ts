import { IPlanetResponseDto } from './planet-response.dto';
import { PLANET_TYPE_ACTIONS } from './plant-type';
import { IUpdatedVehcileProps } from './updated-vehicle-props';
import { IVehicleResponseDTO } from './vehicle-response.dto';

export interface IPlanetVehicle {      
    linkedToPlanet:IPlanetResponseDto;  
    vehicleList: IVehicleResponseDTO[];
}
export interface IVehicleReducerAction {
    type: string;
    payload: IUpdatedVehcileProps[];
}