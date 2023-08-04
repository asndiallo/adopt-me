/**
 * A React component that renders a form for searching pets based on location, animal, and breed.
 *
 * @param {Object} props - The props object.
 * @param {string} props.location - The user's location.
 * @param {function} props.setLocation - A function to update the location state.
 * @param {string} props.animal - The user's preferred animal.
 * @param {function} props.setAnimal - A function to update the animal state.
 * @param {string[]} props.breeds - An array of available breeds for the selected animal.
 * @param {string} props.breed - The user's preferred breed.
 * @param {function} props.setBreed - A function to update the breed state.
 * @param {function} props.onSubmit - A function to handle the form submission.
 * @returns {JSX.Element} - The rendered form component.
 */
const Form = ({
  location,
  setLocation,
  animal,
  setAnimal,
  breeds,
  breed,
  setBreed,
  onSubmit,
}) => {
  const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

  /**
   * Handles the change event of the location input.
   * @param {Object} event - The change event object.
   */
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  /**
   * Handles the change event of the animal select.
   * @param {Object} event - The change event object.
   */
  const handleAnimalChange = (event) => {
    setAnimal(event.target.value);
    setBreed('');
  };

  /**
   * Handles the change event of the breed select.
   * @param {Object} event - The change event object.
   */
  const handleBreedChange = (event) => {
    setBreed(event.target.value);
  };

  /**
   * Handles the blur event of the animal select.
   * @param {Object} event - The blur event object.
   */
  const handleAnimalBlur = (event) => {
    setAnimal(event.target.value);
    setBreed('');
  };

  /**
   * Handles the blur event of the breed select.
   * @param {Object} event - The blur event object.
   */
  const handleBreedBlur = (event) => {
    setBreed(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="location">
        Location
        <input
          id="location"
          type="text"
          value={location}
          placeholder="Location"
          onChange={handleLocationChange}
        />
      </label>

      <label htmlFor="animal">
        Animal
        <select
          id="animal"
          value={animal}
          onChange={handleAnimalChange}
          onBlur={handleAnimalBlur}
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
          onChange={handleBreedChange}
          onBlur={handleBreedBlur}
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
  );
};

export default Form;
