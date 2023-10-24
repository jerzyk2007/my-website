import { useState, useEffect } from 'react';
import './TitlesContainer.css';

const TitlesContainer = () => {

    const [title, setTitle] = useState('');
    const [counter, setCounter] = useState(0);
    const [changeClass, setChangeClass] = useState(true);

    const titles = ['Creative\u00A0Coding', 'Innovative\u00A0Solutions',
        'Code\u00A0Art',
        'Web\u00A0Development',
        'Digital\u00A0Creativity',
        'Code\u00A0Craftsmanship',
        'Tech\u00A0Innovation',
        'Digital\u00A0Expression',
        'Code\u00A0Mastery',
        'Boundless\u00A0Creativity'];

    const handleChangeTitle = () => {
        if (counter === 2) {
            setCounter(0);
        } else {
            setCounter(prev => prev + 1);
        }
    };

    const handleClassAnimation = () => {
        setChangeClass(!changeClass);
    };

    useEffect(() => {
        const intervalId = setInterval(handleChangeTitle, 4000);
        const intervalClass = setInterval(handleClassAnimation, 4000);

        return () => {
            clearInterval(intervalId);
            clearInterval(intervalClass);
        };
    }, [counter]);

    useEffect(() => {
        setTitle(titles[counter]);
    }, [counter]);

    return (
        <div className='titles-container'>
            <h2 data-text={title} className='titles-container-title'>{title}  </h2>
            <h2 data-text={title} className={`titles-container-title-anim ${changeClass ? 'expand' : 'contract'}`} > {title}</h2>
        </div >
    );
};

export default TitlesContainer;