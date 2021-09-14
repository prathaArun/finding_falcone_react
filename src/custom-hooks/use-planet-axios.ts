import  axios  from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IPlanetResponseDto } from '../shared/models/planet-response.dto';
const INITIAL_PLANET_DATA: IPlanetResponseDto[] = [{name:'', distance:0}]

export const usePlanetAxios = () => {
    const [response, setResponse ] = useState(INITIAL_PLANET_DATA);
    const [error, setError ]= useState('');
    const [loading, setLoading ]= useState(true);
    const history = useHistory();
    
    const fetchData = () => {
        axios.get('https://5f5ff7f790cf8d00165573ed.mockapi.io/planets')
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
    },[]);

    useEffect(()=>{
        if(error) {
            history.push('/error');
        }
    }, [error]);

    return {response, error, loading}
}