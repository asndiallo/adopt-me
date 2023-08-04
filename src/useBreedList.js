import { useState, useEffect } from "react";
import axios from "axios";

const localCache = {};

/**
 * Custom React hook to fetch and manage a list of animal breeds.
 * @param {string} animal - The type of animal for which to fetch the breed list.
 * @returns {Array} - An array containing the breed list and the status of the data fetching process.
 */
export default function useBreedList(animal) {
    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState("unloaded");

    useEffect(() => {
        let isMounted = true;

        const requestBreedList = async () => {
            setBreedList([]);
            setStatus("loading");

            try {
                if (localCache[animal]) {
                    setBreedList(localCache[animal]);
                    setStatus("loaded");
                } else {
                    const response = await axios.get(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
                    const data = response.data;

                    if (isMounted) {
                        setBreedList(data.breeds || []);
                        setStatus("loaded");
                        localCache[animal] = data.breeds || [];
                    }
                }
            } catch (error) {
                console.error("Error fetching breed list:", error);
                setStatus("error");
            }
        };

        if (!animal) {
            setBreedList([]);
        } else if (localCache[animal]) {
            setBreedList(localCache[animal]);
        } else {
            requestBreedList();
        }

        return () => {
            isMounted = false;
        };
    }, [animal]);

    return [breedList, status];
}