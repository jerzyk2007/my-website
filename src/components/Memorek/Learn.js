import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DataContext from './context/DataContext';
import Questions from './QuestionsLearn';
import Answers from './AnswersLearn';
import './Learn.css';


const Learn = () => {
    const { phrases } = useContext(DataContext);
    const [phrase, setPhrase] = useState('');
    const [blink, setBlink] = useState(true);
    const navigate = useNavigate();

    const handleDraw = () => {
        if (phrases.length) {
            setBlink(prev => !prev);
            if (blink) {
                const draw = Math.floor(Math.random() * phrases.length);
                setPhrase(phrases[draw]);
            }
        }
    };

    useEffect(() => {
        if (phrases.length === 0) {
            navigate('/memorek/collections');
        }
    }, [phrases, navigate]);

    return (
        <div className='learn'>
            <Questions phrase={phrase} handleDraw={handleDraw} />
            <Answers phrase={phrase} handleDraw={handleDraw} blink={blink} />
        </div>
    );
};

export default Learn;