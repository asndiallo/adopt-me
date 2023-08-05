import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Results from './Results';
import Form from './Form';
import useBreedList from '../utils/useBreedList';
import fetchSearch from '../utils/fetchSearch';

/**
 * Renders a search form for pets based on location, animal type, and breed.
 * Also displays the search results using the 'Results' component.
 *
 * @returns {JSX.Element} The rendered search form and search results.
 */
const SearchParams = () => {
  // Initialize state variables
  const [requestParams, setRequestParams] = useState({
    location: '',
    animal: '',
    breed: '',
  });

  const [animal, setAnimal] = useState('');
  const [breeds] = useBreedList(animal);

  // Retrieve data from the API based on the search form parameters
  const { data } = useQuery(['search', requestParams], fetchSearch);
  const pets = data?.pets ?? [];

  // Handle form submission
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
      {/* Render the search form */}
      <Form
        onSubmit={handleSubmit}
        location={requestParams.location}
        animal={animal}
        onAnimalChange={setAnimal}
        breeds={breeds}
      />
      {/* Render the search results */}
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
