import { useEffect, useState } from "react";
import './TestResult.css';

const TestResult = ({ itemTest }) => {
    const [result, setResult] = useState(0);

    const showAnswers = itemTest.map((item, index) => item.correct === item.selected ? <section key={index} className="test-result_container">
        <p className="test-result-question">{item.question}</p>
        <p className="test-result-answer--correct">{item.answers[item.correct]}</p>
    </section> :
        <section key={index} className="test-result_container">
            <p className="test-result-question">{item.question}</p>
            <p className="test-result-answer--correct">{item.answers[item.correct]}</p>
            <p className="test-result-answer">{item.answers[item.selected]}</p>
        </section>
    );

    useEffect(() => {
        const newResult = itemTest.reduce((acc, item) => {
            if (item.correct === item.selected) {
                return acc + 1;
            }
            return acc;
        }, 0);
        setResult(newResult);
    }, [itemTest]);

    return (
        <div className="test-result">
            <h2 className="test-result-title">Twój wynik {result}/{itemTest.length}</h2>
            {showAnswers}
        </div>
    );
};

export default TestResult;