import { createContext, useState, useEffect } from "react";
import api from '../api/axios';

const DataContext = createContext({});


export const DataProvider = ({ children }) => {
    const [phrases, setPhrases] = useState([]);
    const [test, setTest] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [collectionsName, setCollectionsName] = useState([]);
    const [LearnOrTest, setLearnOrTest] = useState('learn');

    const fetchPhrases = async (collections) => {
        try {
            const response = await api.get(`/phrases/learn/${collections}`);
            setPhrases(response.data);
        }
        catch (err) {
            console.log(`Error: ${err.message}`);
            setErrorMessage(`Error: ${err.message}`);
        }
    };

    const fetchTestPhrases = async (collections) => {
        try {
            const response = await api.get(`/phrases/test/${collections}`);
            setTest(response.data);
        }
        catch (err) {
            console.log(`Error: ${err.message}`);
            setErrorMessage(`Error: ${err.message}`);
        }
    };

    useEffect(() => {
        const fetchCollectionsName = async () => {
            try {
                const response = await api.get('/collections');
                setCollectionsName(response.data);
            }
            catch (err) {
                console.log(`Error: ${err.message}`);
                setErrorMessage(`Error: ${err.message}`);
            }
        };
        fetchCollectionsName();
    }, []);

    return (
        <DataContext.Provider value={{ phrases, test, errorMessage, collectionsName, fetchPhrases, fetchTestPhrases, LearnOrTest, setLearnOrTest }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
