import { createContext, useState, useEffect } from "react";
import api from './../api/phrases';

const DataContext = createContext({});


export const DataProvider = ({ children }) => {
    const [phrases, setPhrases] = useState([]);
    const [test, setTest] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [collectionsName, setCollectionsName] = useState([]);
    const [LearnOrTest, setLearnOrTest] = useState('learn');

    const fetchPhrases = async (collections) => {
        try {
            const response = await api.get(`/phrases/${collections}`);
            setPhrases(response.data);
        }
        catch (err) {
            console.log(`Error: ${err.message}`);
            setErrorMessage(`Error: ${err.message}`);
        }
    };

    useEffect(() => {
        const fetchPhrases = async () => {
            try {
                const response = await api.get('/collections');
                setCollectionsName(response.data);
            }
            catch (err) {
                console.log(`Error: ${err.message}`);
                setErrorMessage(`Error: ${err.message}`);
            }
        };
        fetchPhrases();
    }, []);

    return (
        <DataContext.Provider value={{ phrases, test, errorMessage, collectionsName, fetchPhrases, LearnOrTest, setLearnOrTest }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
