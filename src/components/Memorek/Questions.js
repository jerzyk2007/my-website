import './Questions.css';

const Questions = ({ phrase, handleDraw }) => {
    return (
        <section className="questions">
            <h1>{phrase.question ? phrase.question : "Question"}</h1>
        </section>
    );
};

export default Questions;