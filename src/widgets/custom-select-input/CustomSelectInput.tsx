import React from "react";
import { IPlanetResponseDto } from "../../shared/models/planet-response.dto";

export const CustomSelectInput = (props: {
  index: number;
  collections: IPlanetResponseDto[];
  onPlanetChange: (val: string, selectedIndex: string) => void;
  planetNameIndex: string;
}) => {
  const onHandlerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.onPlanetChange(event.target.value, props.planetNameIndex);
  };
  return (
    <select
      data-testid="select-testid"
      name={props.planetNameIndex}
      onChange={onHandlerChange}
      autoComplete="on"
    >
      <option value="">Select Value</option>
      {props?.collections.map((items, index) => {
        return (
          <option key={index} value={items.name}>
            {items.name}
          </option>
        );
      })}
    </select>
  );
};
