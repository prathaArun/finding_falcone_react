
import { IPlanetResponseDto } from '../shared/models/planet-response.dto';
import {PLANET_TYPE_ACTIONS} from '../shared/models/plant-type';
import { IUpdatedVehcileProps } from '../shared/models/updated-vehicle-props';
import {IVehicleReducerAction} from '../shared/models/vehicle-reducer-action';
import { IVehicleReducerState} from '../shared/models/vehicle-reducer-state';
import { IVehicleResponseDTO } from '../shared/models/vehicle-response.dto';

export const VEHICLE_INITIAL_STATE: IVehicleReducerState = {
    vehicleCollection1: [],
    vehicleCollection2: [],
    vehicleCollection3: [],
    vehicleCollection4: [],
    defaultCollection: [],
    totalTime: 0
}

export const INITIAL_UPDATED_VEHICLE_DATA: IUpdatedVehcileProps[] = [{ 
    isDisable: false,
    name: '',
    total_no: 0,
    max_distance: 0,
    speed: 0}]
    

export const vehicleReducer = (state:IVehicleReducerState, action: IVehicleReducerAction): IVehicleReducerState => {    
        switch (action.type) {
            case PLANET_TYPE_ACTIONS.PLANET1 :           
                return{...state, vehicleCollection1: action.payload}
            case PLANET_TYPE_ACTIONS.PLANET2 :
                return{...state, vehicleCollection2: action.payload}
            case PLANET_TYPE_ACTIONS.PLANET3 :
                return{...state, vehicleCollection3: action.payload}
            case PLANET_TYPE_ACTIONS.PLANET4 :
                return{...state, vehicleCollection4: action.payload}
            default:
                return VEHICLE_INITIAL_STATE

        }
        
}
