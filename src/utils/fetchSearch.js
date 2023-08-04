import axios from 'axios';

/**
 * Fetches data from an external API based on the animal, location, and breed parameters.
 * @param {Array} queryKey - An array containing the animal, location, and breed parameters.
 * @returns {Promise} - A promise that resolves with the response data if successful, or rejects with an error if unsuccessful.
 */
async function fetchSearch({ queryKey }) {
    const { animal, location, breed } = queryKey[1];

    try {
        const apiUrl = `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`;

        const response = await axios.get(apiUrl);

        if (!response.data) {
            throw new Error('No data received from the server');
        }

        return response.data;
    } catch (error) {
        throw new Error(`Pet search for ${breed} ${animal} -- ${location} failed: ${error.message}`);
    }
}

export default fetchSearch;


