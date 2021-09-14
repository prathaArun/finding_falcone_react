import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { PlanetVehicle } from "./PlanetVehicle";

jest.mock("axios");
const mockPlanets = [
  { name: "planet1", distance: 100 },
  { name: "planet2", distance: 300 },
  { name: "planet3", distance: 400 },
  { name: "planet3", distance: 400 }
];

const mockVehicles = [{"name":"Space pod","total_no":2,"max_distance":200,"speed":2},{"name":"Space rocket","total_no":1,"max_distance":300,"speed":4},{"name":"Space shuttle","total_no":1,"max_distance":400,"speed":5},{"name":"Space ship","total_no":2,"max_distance":600,"speed":10}]
describe("Planet select options for api response", () => {
  test("selectbox dynamic values when the api is success", async () => {
    axios.get.mockResolvedValue({ data: mockPlanets });
    const { getAllByTestId } = render(
      <BrowserRouter>
        <PlanetVehicle />
      </BrowserRouter>
    );
    await waitFor(() =>  getAllByTestId('select-testid')[0]);
    expect( getAllByTestId('select-testid')[0].innerHTML).toContain('<option value="planet1">planet1</option>')
  });

  test("Planet dropdown should not render when the planet api failed", async () => {
    axios.get.mockReturnValue(Promise.reject('error'));
    const { getByTestId } = render(
      <BrowserRouter>
        <PlanetVehicle />
      </BrowserRouter>
    );
    
    await waitFor(() => getByTestId('no-data-testid'));
    expect(getByTestId('no-data-testid').innerHTML).toContain('Data not found')});

});

describe("Vehicle radio options for api response", () => {

  test("Planet dropdown should not render when the Planed api failed", async () => {
    axios.get.mockReturnValue(Promise.reject('error'));
    const { getByTestId } = render(
      <BrowserRouter>
        <PlanetVehicle />
      </BrowserRouter>
    );
    
    await waitFor(() => getByTestId('no-data-testid'));
    expect(getByTestId('no-data-testid').innerHTML).toContain('Data not found')});

});