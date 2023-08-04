/**
 * Renders a pet card with information such as name, animal, breed, images, location, and id.
 * Provides a link to the pet details page.
 *
 * @param {Object} props - The pet information.
 * @param {string} props.name - The name of the pet.
 * @param {string} props.animal - The type of animal.
 * @param {string} props.breed - The breed of the pet.
 * @param {string[]} props.images - The images of the pet.
 * @param {string} props.location - The location of the pet.
 * @param {string} props.id - The ID of the pet.
 * @returns {JSX.Element} - The pet card component.
 */
const Pet = ({ name, animal, breed, images, location, id }) => {
  const hero = images.length
    ? images[0]
    : 'http://pets-images.dev-apis.com/pets/none.jpg';

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </a>
  );
};

export default Pet;
