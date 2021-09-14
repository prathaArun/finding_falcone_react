import React from "react";
import { CustomRadioInput } from "../../widgets/custom-radio-input/CustomRadioInput";
import { IVehicleProps } from "../../shared/models/vehicle-props";

export const Vehicle = (props: IVehicleProps) => {
  const onHandlerChange = (selectedVehicle: string) => {
    props.selectedVehicleCallback(selectedVehicle);
  };

  return (
    <div className="flex-column">
      <React.Fragment>
        <CustomRadioInput
          collections={props.updatedVehicleCollections}
          planetNameIndex={props.planetSelected}
          onVehicleChange={onHandlerChange}
        />
      </React.Fragment>   
    </div>
  );
};
