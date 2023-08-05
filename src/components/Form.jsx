import React from 'react';

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

/**
 * A form component for searching pets based on location, animal type, and breed.
 * @param {Object} props - The component props.
 * @param {function} props.onSubmit - The function to call when the form is submitted.
 * @param {string} props.location - The user's location.
 * @param {string} props.animal - The user's selected animal type.
 * @param {function} props.onAnimalChange - The function to call when the user selects a new animal type.
 * @param {string[]} props.breeds - The available breeds for the selected animal type.
 * @returns {JSX.Element} - The rendered form.
 */
const PetSearchForm = ({
  onSubmit,
  location,
  animal,
  onAnimalChange,
  breeds,
}) => {
  /**
   * Handles the change event when the user selects a new animal type.
   * @param {React.ChangeEvent<HTMLSelectElement>} event - The change event.
   */
  const handleAnimalChange = (event) => {
    const selectedAnimal = event.target.value;
    onAnimalChange(selectedAnimal);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="location">
        Location
        <input
          id="location"
          name="location"
          placeholder="Location"
          defaultValue={location}
        />
      </label>

      <label htmlFor="animal">
        Animal
        <select
          id="animal"
          name="animal"
          value={animal}
          onChange={handleAnimalChange}
          onBlur={handleAnimalChange}
        >
          <option />
          {ANIMALS.map((animal) => (
            <option key={animal} value={animal}>
              {animal}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="breed">
        Breed
        <select disabled={!breeds.length} id="breed" name="breed">
          <option />
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default PetSearchForm;
