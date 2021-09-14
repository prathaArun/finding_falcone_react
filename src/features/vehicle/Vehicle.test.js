import {Vehicle} from './Vehicle';
import { render, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const mockUpdatedVehicleData = [{"name":"Space pod","total_no":2,"max_distance":200,"speed":2, isDisable: true},
{"name":"Space rocket","total_no":1,"max_distance":300,"speed":4, isDisable: false},
{"name":"Space shuttle","total_no":1,"max_distance":400,"speed":5, isDisable: false},
{"name":"Space ship","total_no":2,"max_distance":600,"speed":10, isDisable: false}]
describe("Vehicle radio options for api response", () => {

    test("vehicle radio should not render when the data is empty",  () => {    
      const { getByTestId } = render(
        <BrowserRouter>
          <Vehicle  updatedVehicleCollections=''
            planetSelected=''
            selectedVehicleCallback = {jest.fn()} />
        </BrowserRouter>
      );
      
      expect(getByTestId('no-radio-data-testid')).toBeDefined();
    });

    test("vehicle radio should render when the data is available",  () => {    
        const { getAllByTestId } = render(
          <BrowserRouter>
            <Vehicle  updatedVehicleCollections={mockUpdatedVehicleData}
              planetSelected='planet_1'
              selectedVehicleCallback = {jest.fn()} />
          </BrowserRouter>
        );
        
        expect(getAllByTestId('radio_wrapper-testid')).toBeDefined();
      });
    
      test("vehicle radio should be rendered for all data",  () => {    
        const { getAllByTestId } = render(
          <BrowserRouter>
            <Vehicle  updatedVehicleCollections={mockUpdatedVehicleData}
              planetSelected='planet_1'
              selectedVehicleCallback = {jest.fn()} />
          </BrowserRouter>
        );
        
        expect(getAllByTestId('radio_wrapper-testid').length).toEqual(4);
      });

      test("vehicle radio options should be rendered with dynamic props as per data",  () => {    
        const { getAllByTestId } = render(
          <BrowserRouter>
            <Vehicle  updatedVehicleCollections={mockUpdatedVehicleData}
              planetSelected='planet_1'
              selectedVehicleCallback = {jest.fn()} />
          </BrowserRouter>
        );
        
        expect(getAllByTestId('planet_1__Space pod_0')).toBeDefined();
      });
  
  });