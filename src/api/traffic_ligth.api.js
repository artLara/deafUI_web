import axios from 'axios'

export const getColorLight = () =>{
    return axios.get('http://localhost:8000/dataAcquisition/api/v1/')
}