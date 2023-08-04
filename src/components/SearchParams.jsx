import { useEffect, useState } from 'react';
import axios from 'axios';
import Results from './Results';
import useBreedList from '../utils/useBreedList';
import Form from './Form'; // Import the Form component

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
      {/* Use the Form component with appropriate props */}
      <Form
        location={location}
        setLocation={setLocation}
        animal={animal}
        setAnimal={setAnimal}
        breeds={breeds}
        breed={breed}
        setBreed={setBreed}
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      />
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
