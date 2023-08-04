import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import fetchPet from '../utils/fetchPet';

/**
 * Renders the details of a specific pet based on the ID parameter passed through the URL.
 * Uses the 'useParams' hook to retrieve the ID and the 'useQuery' hook to fetch the pet data from an API endpoint.
 * Handles any errors that may occur during the data fetching process.
 *
 * @returns {JSX.Element} The rendered component displaying the pet details or an error message.
 */
const Details = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery(['details', id], fetchPet);

  if (isError) {
    return (
      <div className="details">
        <h2>Something went wrong.</h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  const { name, animal, breed, description, city, state } = data.pets[0];

  return (
    <div className="details">
      <div>
        <h1>{name}</h1>
        <h2>
          {animal} — {breed} -- {city}, {state}
        </h2>
        <button>Adopt Me</button>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Details;
