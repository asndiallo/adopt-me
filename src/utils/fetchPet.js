import axios from 'axios';

/**
 * Fetches pet data from an external API based on the provided pet ID.
 * @param {Array} queryKey - An array containing the query key and pet ID.
 * @returns {Promise} - A promise that resolves to the fetched pet data.
 * @throws {Error} - If the API request fails or the response data is empty.
 */
const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];

  try {
    const response = await axios.get(
      `http://pets-v2.dev-apis.com/pets?id=${id}`
    );
    return response.data;
  } catch (error) {
    const errorMessage = error.response ? error.response.data : error.message;
    throw new Error(`details/${id} fetch not ok: ${errorMessage}`);
  }
};

export default fetchPet;
