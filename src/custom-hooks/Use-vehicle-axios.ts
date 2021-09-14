import  axios  from 'axios';
import { useEffect, useState } from 'react';
import { IVehicleResponseDTO } from '../shared/models/vehicle-response.dto';
const INITIAL_DATA: IVehicleResponseDTO[] = [{ 
    name: '',
    total_no: 0,
    max_distance: 0,
    speed: 0}]

export const useVehicleAxios = () => {
    const [response, setResponse ] = useState(INITIAL_DATA);
    const [error, setError ]= useState('');
    const [loading, setLoading ]= useState(true);
    
    const fetchData = () => {
        axios.get('https://5f5ff7f790cf8d00165573ed.mockapi.io/vehicles')
        .then((res: any) => {
            setResponse(res?.data);
        })
        .catch((err) => {
            setError(err)
        })
        .finally(()=> {
            setLoading(false);
        })
    }
    useEffect(() => {
        fetchData();
    },[])
    return {response, error, loading}
}