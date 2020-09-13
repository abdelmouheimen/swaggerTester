import axios from 'axios';
import { transformSwaggerToModels } from '../utils/Utils';

export const getSwaggerJson = async (url: string): Promise<any> => {
  fetch(url)
    .then(res => res.json())
    .then(data => data)
    .then(data => transformSwaggerToModels(data)).then(result => console.log(result))
}
