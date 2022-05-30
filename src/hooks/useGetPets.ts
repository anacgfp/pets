import axios from 'axios';
import { useCallback, useState } from 'react';
import Pet from '../models/pet.model';
import { URLS } from '../utils/urls';

const fetchPets = (url: string) => {
 return axios.get(url);
}

export const useGetPets = () => {
 const [fetchingPets, setFetchingPets] = useState(false);
 const [errorPets, setErrorPets] = useState(false);
 const [pets, setPets] = useState<Pet[]>([]);

 const petsUrl = `${URLS.BASE}/pets`;

 const execute = async (): Promise<void> => {
  try {
   setFetchingPets(true);
   const response = await fetchPets(petsUrl);
   setPets(response.data);
   setFetchingPets(false);
  } catch (e) {
   setErrorPets(true);
   setFetchingPets(false);
  }
 }

 return {
  errorPets,
  fetchingPets,
  pets,
  fetchPets: useCallback(execute, [petsUrl])
 }
}