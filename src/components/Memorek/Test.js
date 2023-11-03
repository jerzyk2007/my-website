import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataContext from './context/DataContext';
import QuestionsTest from './QuestionsTest';
import AnswersTest from './AnswersTest';
import TestResult from './TestResult';
import './Test.css';

const Test = () => {
    const navigate = useNavigate();
    const { test } = useContext(DataContext);
    const [itemTest] = useState(test);
    const [counter, setCounter] = useState(0);
    const [result, setResult] = useState(false);

    const testResult = () => {
        setResult(true);
        console.log('koniec gry');
    };

    const handleAnswers = async (id) => {
        try {
            itemTest[counter].selected = id;
            setCounter(prev => prev + 1);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (test.length === 0) {
            navigate('/memorek/collections');
        }
    }, [test, navigate]);

    useEffect(() => {
        if (counter !== 0 && counter === test.length) {
            testResult();
        }
    }, [counter, itemTest, test]);

    return (
        <div className='test'>
            {!result && <>
                {itemTest.length > 0 && <h2 className='test-title'>Question  {counter < itemTest.length ? (counter + 1) : itemTest.length}/{itemTest.length}</h2>}
                <QuestionsTest question={itemTest[counter]?.question} />
                <AnswersTest answers={itemTest[counter]?.answers} setCounter={setCounter} counter={counter} handleAnswers={handleAnswers} />
            </>}
            {result && <TestResult itemTest={itemTest} />}
        </div>
    );
};

export default Test;
// import { useContext, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import DataContext from './context/DataContext';
// import QuestionsTest from './QuestionsTest';
// import AnswersTest from './AnswersTest';
// import TestResult from './TestResult';
// import './Test.css';

// const Test = () => {
//     const navigate = useNavigate();

//     const [test, setTest] = useState([
//         {
//             question: 'Turtle',
//             answers: ['Kaczka', 'Żółw', 'Pies', 'Kot'],
//             correct: 1
//         },
//         {
//             question: 'Green',
//             answers: ['Zielony', 'Czerwony', 'Żółty', 'Czarny'],
//             correct: 0
//         },
//         {
//             question: 'Bicycle',
//             answers: ['Samochód', 'Hulajnoga', 'Deskorolka', 'Rower'],
//             correct: 3
//         },
//         {
//             question: 'Speaker',
//             answers: ['Słuchawki', 'Głośnik', 'Mikrofon', 'Wzmacniacz'],
//             correct: 1
//         },
//         {
//             question: 'Name',
//             answers: ['Kurtka', 'Palec', 'Imię', 'Spodnie'],
//             correct: 2
//         }
//     ]);
//     const [itemTest, setItemTest] = useState([]);
//     const [counter, setCounter] = useState(0);
//     const [result, setResult] = useState(false);

//     const testLength = 3;

//     const testResult = () => {
//         setResult(true);
//         console.log('koniec gry');
//     };

//     const handleAnswers = async (id) => {
//         try {
//             itemTest[counter].selected = id;
//             setCounter(prev => prev + 1);
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     const handleStart = () => {
//         let drawTest = [];
//         let x = 0;
//         do {
//             const drawId = Math.floor(Math.random() * test.length);
//             const drawItem = test[drawId];
//             const isUnique = !drawTest.some((item) => item.question === drawItem.question);
//             if (isUnique) {
//                 drawTest = [...drawTest, drawItem];
//                 x++;
//             }
//             if (x === testLength) {
//                 setItemTest(drawTest);
//             }
//         } while (x < 3);
//     };

//     useEffect(() => {
//         setItemTest(test);
//     }, [test]);

//     useEffect(() => {
//         if (counter === testLength) {
//             testResult();
//         }
//     }, [counter, itemTest]);

//     return (
//         <div className='test'>
//             {!result && <>
//                 {itemTest.length > 0 && <h2 className='test-title'>Questions  {counter < itemTest.length ? (counter + 1) : itemTest.length}/{itemTest.length}</h2>}
//                 <QuestionsTest question={itemTest[counter]?.question} />
//                 <AnswersTest answers={itemTest[counter]?.answers} handleStart={handleStart} setCounter={setCounter} counter={counter} handleAnswers={handleAnswers} />
//             </>}
//             {result && <TestResult itemTest={itemTest} />}
//         </div>
//     );
// };

// export default Test;
