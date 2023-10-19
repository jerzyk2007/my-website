// import { useState, useEffect } from 'react';
// import './Titles.css';

// const Titles = () => {

//     const [title, setTitle] = useState('');
//     const [counter, setCounter] = useState(0);
//     const [changeClass, setChangeClass] = useState(true);

//     const titles = ['Creative\u00A0Coding', 'Innovative\u00A0Solutions',
//         'Code\u00A0Art',
//         'Web\u00A0Development',
//         'Digital\u00A0Creativity',
//         'Code\u00A0Craftsmanship',
//         'Tech\u00A0Innovation',
//         'Digital\u00A0Expression',
//         'Code\u00A0Mastery',
//         'Boundless\u00A0Creativity'];

//     const handleChangeTitle = () => {
//         if (counter === 2) {
//             setCounter(0);
//         } else {
//             setCounter(prev => prev + 1);
//         }
//     };

//     const handleClassAnimation = () => {
//         setChangeClass(!changeClass);
//     };

//     useEffect(() => {
//         const intervalId = setInterval(handleChangeTitle, 4000);
//         const intervalClass = setInterval(handleClassAnimation, 4000);

//         return () => {
//             clearInterval(intervalId);
//             clearInterval(intervalClass);
//         };
//     }, [counter]);

//     useEffect(() => {
//         setTitle(titles[counter]);
//     }, [counter]);

//     return (
//         <div className='titles'>
//             <h2 data-text={title} className='titles__title'>{title}  </h2>
//             <h2 data-text={title} className={`titles__title-anim ${changeClass ? 'expand' : 'contract'}`} > {title}</h2>
//         </div >
//     );
// };

// export default Titles;

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './Titles.css';

const Titles = () => {
    const [title, setTitle] = useState('');
    const [counter, setCounter] = useState(0);
    const [changeClass, setChangeClass] = useState(true);

    const titles = useMemo(() => [
        'Creative\u00A0Coding',
        'Innovative\u00A0Solutions',
        'Code\u00A0Art',
        'Web\u00A0Development',
        'Digital\u00A0Creativity',
        'Code\u00A0Craftsmanship',
        'Tech\u00A0Innovation',
        'Digital\u00A0Expression',
        'Code\u00A0Mastery',
        'Boundless\u00A0Creativity'
    ], []);

    const handleChangeTitle = useCallback(() => {
        if (counter === 2) {
            setCounter(0);
        } else {
            setCounter(prev => prev + 1);
        }
    }, [counter]);

    const handleClassAnimation = useCallback(() => {
        setChangeClass(prevClass => !prevClass);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(handleChangeTitle, 4000);
        const intervalClass = setInterval(handleClassAnimation, 4000);

        return () => {
            clearInterval(intervalId);
            clearInterval(intervalClass);
        };
    }, [handleChangeTitle, handleClassAnimation]);

    useEffect(() => {
        setTitle(titles[counter]);
    }, [titles, counter]);

    return (
        <div className='titles'>
            <h2 data-text={title} className='titles__title'>{title}  </h2>
            <h2 data-text={title} className={`titles__title-anim ${changeClass ? 'expand' : 'contract'}`} > {title}</h2>
        </div>
    );
};

export default Titles;
