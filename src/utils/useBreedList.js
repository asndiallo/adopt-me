import { useQuery } from '@tanstack/react-query';
import fetchBreedList from './fetchBreedList';

/**
 * Custom React hook to fetch and manage a list of animal breeds.
 * @param {string} animal - The type of animal for which to fetch the breed list.
 * @returns {Array} - An array containing the breed list and the status of the data fetching process.
 */
export default function useBreedList(animal) {
  const { data, status } = useQuery(['breeds', animal], fetchBreedList);
  return [data?.breeds ?? [], status];
}
