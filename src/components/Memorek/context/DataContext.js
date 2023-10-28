import { createContext, useState, useEffect } from "react";
import axios from 'axios';

const DataContext = createContext({});


export const DataProvider = ({ children }) => {
    const [phrases, setPhrases] = useState([
        {
            id: 1,
            question: "white",
            answer: "biały"
        },
        {
            id: 2,
            question: "color",
            answer: "kolor"
        },
        {
            id: 3,
            question: "table",
            answer: "stół"
        },
        {
            id: 4,
            question: "clock",
            answer: "zegar"
        },
        {
            id: 5,
            question: "name",
            answer: "imię"
        },
        {
            id: 6,
            question: "key",
            answer: "klawisz"
        }
    ]);

    return (
        <DataContext.Provider value={{ phrases, setPhrases }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;