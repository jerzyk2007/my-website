import './Answers.css';

const Answers = ({ phrase, handleDraw, blink }) => {
    return (
        <section className="answers" onClick={handleDraw}>
            <h1>{phrase.answer ? (blink ? phrase.answer : "") : "Answer"}</h1>
        </section>
    );
};

export default Answers;