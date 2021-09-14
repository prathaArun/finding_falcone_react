import { IVehicleResponseDTO } from "./models/vehicle-response.dto";

export const vehicleMaxSpeed = (
  data: IVehicleResponseDTO[],
  selectedVehicle: string
) => {
  return data.map((item) => {
    if (item.name === selectedVehicle) {
      return item.total_no * item.max_distance;
    }
    return 0;
  }).filter((item) => item !== 0);
};
