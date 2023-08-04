import Pet from './Pet';

/**
 * Renders a list of pets based on the input 'pets' array. Handles the case when no pets are found.
 * 
 * @param {Array} pets - An array of objects representing pets, with properties such as name, animal, breed, images, location, and id.
 * @returns {JSX.Element} - A div with class "search" containing either a message saying "No Pets Found" or a list of 'Pet' components.
 */
const Results = ({ pets }) => {
  // Check if the 'pets' array is empty
  if (pets.length === 0) {
    // If it is empty, display a message saying "No Pets Found"
    return (
      <div className="search">
        <h1>No Pets Found</h1>
      </div>
    );
  }

  // If it is not empty, map through the 'pets' array and render a 'Pet' component for each pet object in the array
  return (
    <div className="search">
      {pets.map((pet) => (
        <Pet
          animal={pet.animal}
          key={pet.id}
          name={pet.name}
          breed={pet.breed}
          images={pet.images}
          location={`${pet.city}, ${pet.state}`}
          id={pet.id}
        />
      ))}
    </div>
  );
};

export default Results;
