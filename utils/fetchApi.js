import axios from 'axios';

export const baseUrl= 'https://bayut.p.rapidapi.com'

export const fetchApi = async(url) =>{
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': 'ff221f9968mshdc9658e43fa556ep1cd60ajsn6f44650d94f0',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }        
    });
    return data;
}