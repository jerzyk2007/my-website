import { useContext } from 'react';
import DataContext from './context/DataContext';
import './Questions.css';

const Questions = ({ phrase }) => {
    const { errorMessage } = useContext(DataContext);
    return (
        <section className="questions">
            {!errorMessage && <h1>{phrase.question ? phrase.question : "Question"}</h1>}
        </section>
    );
};

export default Questions;