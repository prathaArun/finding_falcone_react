import React, { useEffect, useReducer, useState } from "react";
import { usePlanetAxios } from "../../custom-hooks/use-planet-axios";
import { IPlanetResponseDto } from "../../shared/models/planet-response.dto";
import { CustomSelectInput } from "../../widgets/custom-select-input/CustomSelectInput";
import { Vehicle } from "../vehicle/Vehicle";
import { PLANET_TYPE_ACTIONS } from "../../shared/models/plant-type";
import {
  INITIAL_UPDATED_VEHICLE_DATA,
  vehicleReducer,
  VEHICLE_INITIAL_STATE,
} from "../../reducers/vehicleReducer";
import { useVehicle } from "../../custom-hooks/use-vehicle";
import "./planet-vehicle.scss";
import { vehicleMaxSpeed } from "../../shared/utils";

const INITIAL_DATA: IPlanetResponseDto[] = [{ name: "", distance: 0 }];

export const PlanetVehicle = () => {
  const {
    response: planetResponse,
    error,
    loading,
  }: {
    response: IPlanetResponseDto[];
    error: string;
    loading: boolean;
  } = usePlanetAxios();
  const { vehicleData, updateVehicle } = useVehicle();
  const [data, setData] = useState(INITIAL_DATA);
  const [planet1TimeTaken, setPlanet1TimeTaken] = useState(0);
  const [planet2TimeTaken, setPlanet2TimeTaken] = useState(0);
  const [planet3TimeTaken, setPlanet3TimeTaken] = useState(0);
  const [planet4TimeTaken, setPlanet4TimeTaken] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [planetselected, setPlanetselected] = useState("");

  const [vehicleState, dispatch] = useReducer(
    vehicleReducer,
    VEHICLE_INITIAL_STATE
  );
  const onHandlerChange = (planetValue: string, planetNameIndex: string) => {
    setPlanetselected(planetNameIndex);
    const item = data.filter((item) => item.name === planetValue);

    if (item.length > 0) {
      const items = updateVehicle(vehicleData, item[0]);
      dispatch({
        type: planetNameIndex,
        payload: items,
      });
    }
  };

  useEffect(() => {
    if (planetResponse !== null) {
      setData(planetResponse);
    }
  }, [planetResponse]);

  useEffect(() => {
    setTotalTime(planet1TimeTaken+planet2TimeTaken+planet3TimeTaken+planet4TimeTaken)
  }, [planet1TimeTaken,planet2TimeTaken,planet3TimeTaken, planet4TimeTaken, totalTime]);

  const handleSelectedVehicleCallback = (selectedVehicle: string) => {
       const maxSpeed = vehicleMaxSpeed(vehicleState.vehicleCollection1, selectedVehicle);
       setTotalTime(0);
    switch (planetselected) {
        case PLANET_TYPE_ACTIONS.PLANET1:
            setPlanet1TimeTaken(maxSpeed[0])
            break; 
        case PLANET_TYPE_ACTIONS.PLANET2:
            setPlanet2TimeTaken(maxSpeed[0]) 
            break;
        case PLANET_TYPE_ACTIONS.PLANET3:
            setPlanet3TimeTaken(maxSpeed[0])
            break;
        case PLANET_TYPE_ACTIONS.PLANET4:
            setPlanet4TimeTaken(maxSpeed[0])
            break; 
        default:
         break;
      }
  }
  const renderPlanetOptions = () => {
    if (data && data.length > 1 && data[0].name !== "") {
      const items: JSX.Element[] = [];

      for (let i = 0; i < Object.keys(PLANET_TYPE_ACTIONS).length; i++) {
        items.push(
          <div key={i} className="planet-vehicle-container flex-column">
            <div className="planet-container flex-row">
              <CustomSelectInput
                key={i}
                index={i}
                planetNameIndex={`planet_${i + 1}`}
                collections={data}
                onPlanetChange={onHandlerChange}
              />
            </div>
          </div>
        );
      }
      return items;
    }
    return <h1 data-testid="no-data-testid">Data not found</h1>;
  };
  return (
    <div className="wrapper">
      <div className="flex-row">{renderPlanetOptions()}</div>
      {planetselected && (
        <div
          data-testid="vehicle-testid"
          className="vehicle-container flex-row"
        >
          {vehicleState.vehicleCollection1 &&
            vehicleState.vehicleCollection1.length > 0 && (
                <div className="flex-column">
                <h2>Planet 1</h2>
              <Vehicle
                updatedVehicleCollections={vehicleState.vehicleCollection1}
                selectedVehicleCallback={handleSelectedVehicleCallback}
                planetSelected={PLANET_TYPE_ACTIONS.PLANET1}
              />
              </div>
            )}
          {vehicleState.vehicleCollection2 &&
            vehicleState.vehicleCollection2.length > 0 && (
                <div className="flex-column">
                <h2>Planet 2</h2>
              <Vehicle
                updatedVehicleCollections={vehicleState.vehicleCollection2}
                selectedVehicleCallback={handleSelectedVehicleCallback}
                planetSelected={PLANET_TYPE_ACTIONS.PLANET2}
              /></div>
            )}
          {vehicleState.vehicleCollection3 &&
            vehicleState.vehicleCollection3.length > 0 && (
                <div className="flex-column">
                <h2>Planet 3</h2>
              <Vehicle
                updatedVehicleCollections={vehicleState.vehicleCollection3}
                selectedVehicleCallback={handleSelectedVehicleCallback}
                planetSelected={PLANET_TYPE_ACTIONS.PLANET3}
              /></div>
            )}
          {vehicleState.vehicleCollection4 &&
            vehicleState.vehicleCollection4.length > 0 && (
                <div className="flex-column">
                <h2>Planet 4</h2>
              <Vehicle
                updatedVehicleCollections={vehicleState.vehicleCollection4}
                selectedVehicleCallback={handleSelectedVehicleCallback}
                planetSelected={PLANET_TYPE_ACTIONS.PLANET4}
              /></div>
            )}
        </div>
      )}
    </div>
  );
};
