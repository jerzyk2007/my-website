import { useContext } from 'react';
import DataContext from './context/DataContext';
import './Answers.css';

const Answers = ({ phrase, handleDraw, blink }) => {
    const { errorMessage } = useContext(DataContext);
    return (
        <section className="answer" onClick={handleDraw}>
            {!errorMessage && <h1>{phrase.answer ? (blink ? phrase.answer : "") : "Answer"}</h1>}
            {errorMessage && <h1 style={{ color: "red" }}>{errorMessage}</h1>}
        </section>
    );
};

export default Answers;