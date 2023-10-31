import { useEffect, useState } from 'react';
import './AnswersTest.css';

const AnswersTest = ({ answers, handleStart, handleAnswers }) => {

    const answerItem = answers?.map((answer, index) => (
        <span className='answers-test-item' onClick={() => handleAnswers(index)} key={index}>{answer}</span>
    ));

    return (
        <div className='answers-test' >
            {answerItem}
        </div>
    );
};

export default AnswersTest;