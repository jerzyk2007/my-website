import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DataContext from './context/DataContext';
import QuestionsTest from './QuestionsTest';
import AnswersTest from './AnswersTest';
import './Test.css';

const Test = () => {
    const { test } = useContext(DataContext);
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (test.length === 0) {
    //         navigate('/memorek/collections');
    //     }
    // }, [test, navigate]);

    return (
        <div className='test'>
            <h2 className='test-title'>Questions</h2>
            <QuestionsTest />
            <AnswersTest />
        </div>
    );
};

export default Test;