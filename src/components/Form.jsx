import React from 'react';

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

const PetSearchForm = ({
  onSubmit,
  location,
  animal,
  onAnimalChange,
  breeds,
}) => {
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
          onChange={(e) => {
            onAnimalChange(e.target.value);
          }}
          onBlur={(e) => {
            onAnimalChange(e.target.value);
          }}
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

      <button>Submit</button>
    </form>
  );
};

export default PetSearchForm;
