import { IVehicleResponseDTO } from "../shared/models/vehicle-response.dto";
import { useVehicleAxios } from "./Use-vehicle-axios";
import { useHistory } from 'react-router-dom';
import { IPlanetResponseDto } from "../shared/models/planet-response.dto";
import { IUpdatedVehcileProps } from "../shared/models/updated-vehicle-props";

export const useVehicle = () => {
    const {response: vehicleData , error: vehicleError, loading: vehicleLoading }: {response:IVehicleResponseDTO[], error: string, loading: boolean} = useVehicleAxios();
    const history = useHistory();
    if(vehicleError) {
        history.push('/error');
    }

    const updateVehicle = (data: IVehicleResponseDTO[], planetVal: IPlanetResponseDto): IUpdatedVehcileProps[] => {
        const items = data.map((item)=> {
        if((item.total_no * item.max_distance) >= planetVal.distance) {       
            return {...item, isDisable: false}
        } 
        return {...item, isDisable: true}
    })
    return items;
    }
    return {vehicleData, updateVehicle}
}