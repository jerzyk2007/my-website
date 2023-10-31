import './QuestionsTest.css';

const QuestionsTest = ({ question }) => {
    return (
        <div className='questions-test'>
            <h1 className='questions-test-title'>{question}</h1>
        </div>
    );
};

export default QuestionsTest;