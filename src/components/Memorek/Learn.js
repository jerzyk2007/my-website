import { useContext, useState } from 'react';
import DataContext from './context/DataContext';
import Questions from './Questions';
import Answers from './Answers';
import './Learn.css';


const Learn = () => {
    const { phrases } = useContext(DataContext);
    const [phrase, setPhrase] = useState('');
    const [blink, setBlink] = useState(true);


    const handleDraw = () => {
        if (phrases.length) {
            setBlink(prev => !prev);
            if (blink) {
                const draw = Math.floor(Math.random() * phrases.length);
                setPhrase(phrases[draw]);
            }
        }
    };

    return (
        <div className='learn'>
            <Questions phrase={phrase} handleDraw={handleDraw} />
            <Answers phrase={phrase} handleDraw={handleDraw} blink={blink} />
        </div>
    );
};

export default Learn;