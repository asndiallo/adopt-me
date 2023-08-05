import axios from 'axios';
/**
 * Fetches a list of breeds for a given animal from an external API.
 *
 * @param {Array} queryKey - An array containing the animal name as the second element.
 * @returns {Promise} - A promise that resolves to the data from the API response if the request is successful.
 * @throws {Error} - If there is an error during the API call, an error with a specific message will be thrown.
 */
const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];

  if (!animal) {
    throw new Error('No animal provided');
  }

  try {
    const response = await axios.get(
      `http://pets-v2.dev-apis.com/breeds?animal=${animal}`,
    );
    return response.data;
  } catch (error) {
    const errorMessage = error.response ? error.response.data : error.message;
    throw new Error(`Failed to fetch breeds for ${animal}: ${errorMessage}`);
  }
};

export default fetchBreedList;
