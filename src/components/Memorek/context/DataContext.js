import { createContext, useState, useEffect } from "react";
import api from './../api/phrases';

const DataContext = createContext({});


export const DataProvider = ({ children }) => {
    const [phrases, setPhrases] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [collectionsName, setCollectionsName] = useState([]);

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
        <DataContext.Provider value={{ phrases, setPhrases, errorMessage, collectionsName, fetchPhrases }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;


// import { createContext, useState, useEffect } from "react";
// import api from './../api/phrases';

// const DataContext = createContext({});


// export const DataProvider = ({ children }) => {
//     const [phrases, setPhrases] = useState([]);
//     const [errorMessage, setErrorMessage] = useState('');
//     const [collections, setCollections] = useState('');
//     const [board, setBoard] = useState({
//         instruction: true,
//         learn: false,
//         collections: false,
//         user: false
//     });
//     const [collectionsName, setCollectionsName] = useState([]);

//     const handleChangeBoard = (boardName) => {
//         const updatedBoard = { ...board };
//         for (const key in updatedBoard) {
//             updatedBoard[key] = false;
//         }
//         updatedBoard[boardName] = true;
//         setBoard(updatedBoard);
//     };

//     const fetchPhrases = async () => {
//         try {
//             const response = await api.get(`/phrases/${collections}`);
//             setPhrases(response.data);
//         }
//         catch (err) {
//             console.log(`Error: ${err.message}`);
//             setErrorMessage(`Error: ${err.message}`);
//         }
//     };
//     useEffect(() => {
//         fetchPhrases();
//         console.log('ok');
//     }, [collections]);


//     useEffect(() => {
//         const fetchPhrases = async () => {
//             try {
//                 const response = await api.get(`/collections`);
//                 setCollectionsName(response.data);
//             }
//             catch (err) {
//                 console.log(`Error: ${err.message}`);
//                 setErrorMessage(`Error: ${err.message}`);
//             }
//         };
//         fetchPhrases();
//     }, []);

//     return (
//         <DataContext.Provider value={{ phrases, setPhrases, errorMessage, collections, setCollections, board, setBoard, collectionsName, handleChangeBoard, fetchPhrases }}>
//             {children}
//         </DataContext.Provider>
//     );
// };

// export default DataContext;