import { useEffect, useState } from 'react';
import axios from 'axios';
import Results from './Results';
import useBreedList from './useBreedList';
const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

/**
 * Component that renders a search form for pets based on location, animal type, and breed.
 * Allows users to search for pets available for adoption based on their preferences.
 */
const SearchParams = () => {
  const [pets, setPets] = useState([]);
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  const [breeds] = useBreedList(animal);

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Sends a request to the API with the selected location, animal, and breed,
   * and updates the 'pets' state variable with the response.
   */
  async function requestPets() {
    try {
      const response = await axios.get(
        `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
      );
      setPets(response.data.pets);
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            type="text"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed('');
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
              setBreed('');
            }}
          >
            <option value="">Select Animal</option>
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option value="">Select Breed</option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
