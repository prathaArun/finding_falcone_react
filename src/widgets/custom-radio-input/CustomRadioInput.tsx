import React, { useEffect, useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { IUpdatedVehcileProps } from "../../shared/models/updated-vehicle-props";

export const CustomRadioInput = (props: {
  collections: IUpdatedVehcileProps[];
  onVehicleChange: (val: string) => void;
  planetNameIndex: string;
}) => {
  const [planetNameIndex, setPlanetNameIndex] = useState("");
  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onVehicleChange(event.target.value);
  };
  useEffect(() => {
    setPlanetNameIndex(props.planetNameIndex);
  }, [props.planetNameIndex]);
  return (
    <div className="flex-column">
      {props.collections ? (
        props.collections.map((item, index) => {
          var opts: any = {};
          if (item.isDisable) {
            opts["disabled"] = "disabled";
          }
          return (
            <div key={index} data-testid="radio_wrapper-testid" className="flex-row input-radio-group">  
              <input
                data-testid={`${planetNameIndex}__${item.name}_${index}`}
                type="radio"
                id={`${planetNameIndex}_${item.name}_${index}`}
                name={props.planetNameIndex}
                value={item.name}
                {...opts}
                onChange={onValueChange}
              />
              <label
                htmlFor={`${item.name}_${index}`}
              >{`${item.name}(${item.total_no})`}</label>
            </div>
          );
        })
      ) : (
        <div data-testid="no-radio-data-testid">No Data</div>
      )}
    </div>
  );
};
