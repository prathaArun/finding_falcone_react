import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { BrowserRouter, useHistory } from "react-router-dom";
import { PlanetVehicle } from "./PlanetVehicle";

export const FindFalcon = () => {
    const history  = useHistory();
  const onSubmitHandler = (body: any) => {
    axios.post('https://5f5ff7f790cf8d00165573ed.mockapi.io/find', {body})
    .then((res: any) => {
        history.push('/')
    })
    .catch((err) => {
        history.push('/error')
    })
    .finally(()=> {
      return true;
    })
}

  return (
    <Form onSubmit={onSubmitHandler}>
      <PlanetVehicle />
      <div className="flex-row button-center">
        <Button type="submit" variant="primary" disabled={true}>
          Find Falcon
        </Button>
      </div>
    </Form>
  );
};
