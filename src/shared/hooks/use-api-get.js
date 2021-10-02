import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import coffees from '../../coffees.json';

const getErrorMessage = (error) => error;
 
export const useApiGet = (endpoint, fetchParams = {}, dependenciesArray = []) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [fetching, setFetching] = useState(true);
    let isMounted = false;

    const fetch = async () => {
        try {
            setFetching(true);
            const res = await Promise.resolve(coffees);
            if (isMounted) {
                setData(res);
                setFetching(false);
                setError(null);
            }
        } catch (err) {
            if (isMounted) {
                const errorMessage = getErrorMessage(err);
                setError(errorMessage);
            }
            setFetching(false);
        }
    };

    useEffect(() => {
        isMounted = true;
        fetch();
    }, dependenciesArray);

    return {
        data, error, fetching, setData, fetch
    };
};

useApiGet.propTypes = {
    endpoint: PropTypes.string.isRequired,
    fetchParams: PropTypes.object,
    dependenciesArray: PropTypes.array,
};