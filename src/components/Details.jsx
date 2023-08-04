import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import AdoptedPetContext from '../utils/adoptedPetContext';
import ErrorBoundary from './ErrorBoundary';
import Modal from './Modal';
import fetchPet from '../utils/fetchPet';
import Carousel from './Carousel';

/**
 * Renders the details of a specific pet based on the ID parameter passed through the URL.
 * Uses the 'useParams' hook to retrieve the ID and the 'useQuery' hook to fetch the pet data from an API endpoint.
 * Handles any errors that may occur during the data fetching process.
 *
 * @returns {JSX.Element} The rendered component displaying the pet details or an error message.
 */
const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery(['details', id], fetchPet);

  /**
   * Handles the adoption of the pet and navigates back to the home page.
   */
  const handleAdopt = () => {
    setAdoptedPet(data.pets[0]);
    navigate('/');
  };

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

  const { name, animal, breed, description, city, state, images } =
    data.pets[0];

  return (
    <div className="details">
      <Carousel images={images} />
      <div>
        <h1>{name}</h1>
        <h2>
          {animal} — {breed} -- {city}, {state}
        </h2>
        <button onClick={() => setShowModal(true)}>Adopt {name}</button>
        <p>{description}</p>
        {showModal && (
          <Modal>
            <div>
              <h1>Would you like to adopt {name}?</h1>
              <div className="buttons">
                <button onClick={handleAdopt}>Definitely Yes</button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

function DetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Details />
    </ErrorBoundary>
  );
}

export default DetailsWithErrorBoundary;
