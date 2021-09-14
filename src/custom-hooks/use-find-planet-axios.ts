import  axios  from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IPlanetResponseDto } from '../shared/models/planet-response.dto';
const INITIAL_PLANET_DATA: IPlanetResponseDto[] = [{name:'', distance:0}]

export const useFindPlanetAxios = (body: any) => {
    const [response, setResponse ] = useState('');
    const [error, setError ]= useState('');
    const [loading, setLoading ]= useState(true);
    const history = useHistory();
    
    const postData = () => {
        axios.post('https://5f5ff7f790cf8d00165573ed.mockapi.io/find')
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
        postData();
    },[]);

    useEffect(()=>{
        if(error) {
            history.push('/error');
        }
    }, [error]);

    return {response, error, loading}
}