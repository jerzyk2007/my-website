import { createContext, useState, useEffect } from "react";
import api from './../api/phrases';

const DataContext = createContext({});


export const DataProvider = ({ children }) => {
    const [phrases, setPhrases] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [collections, setCollections] = useState('phrases');


    useEffect(() => {
        const fetchPhrases = async () => {
            try {
                const response = await api.get(`/${collections}`);
                setPhrases(response.data);
            }
            catch (err) {
                console.log(`Error: ${err.message}`);
                setErrorMessage(`Error: ${err.message}`);
            }
        };
        fetchPhrases();
    }, []);


    return (
        <DataContext.Provider value={{ phrases, setPhrases, errorMessage, setCollections }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;