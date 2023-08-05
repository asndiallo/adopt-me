import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Results from './Results';
import Form from './Form';
import useBreedList from '../utils/useBreedList';
import fetchSearch from '../utils/fetchSearch';

/**
 * Renders a search form for pets based on location, animal type, and breed.
 * Also displays the search results using the 'Results' component.
 */
const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: '',
    animal: '',
    breed: '',
  });

  const [animal, setAnimal] = useState('');
  const [breeds] = useBreedList(animal);

  const { data } = useQuery(['search', requestParams], fetchSearch);
  const pets = data?.pets ?? [];

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const obj = {
      animal: formData.get('animal') ?? '',
      breed: formData.get('breed') ?? '',
      location: formData.get('location') ?? '',
    };
    setRequestParams(obj);
  };

  return (
    <div className="search-params">
      <Form
        onSubmit={handleSubmit}
        location={requestParams.location}
        animal={animal}
        onAnimalChange={setAnimal}
        breeds={breeds}
      />
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
