import { createContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext({});


export const DataProvider = ({ children }) => {
    const [phrases, setPhrases] = useState([]);
    const [test, setTest] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [collectionsName, setCollectionsName] = useState([]);
    const [LearnOrTest, setLearnOrTest] = useState('learn');

    const baseURL = 'https://salty-badlands-34718-49e2594dd237.herokuapp.com';
    // const baseURL = 'http://localhost:3500';

    const fetchPhrases = async (collections) => {
        try {
            const response = await axios.get(`${baseURL}/phrases/learn/${collections}`);
            console.log(response.data);
            setPhrases(response.data);
        }
        catch (err) {
            console.log(`Error: ${err.message}`);
            setErrorMessage(`Error: ${err.message}`);
        }
    };

    const fetchTestPhrases = async (collections) => {
        try {
            const response = await axios.get(`${baseURL}/phrases/test/${collections}`);
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
                const response = await axios.get(`${baseURL}/collections`);
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
