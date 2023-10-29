import { Routes, Route } from 'react-router-dom';
import Learn from './Learn';
import Collections from './Collections';
import Instruction from './Instruction';
import './Board.css';

const Board = () => {

    return (
        <div className='board'>
            <Routes>
                <Route path='/' element={<Instruction />} />
                <Route path='learn' element={<Learn />} />
                <Route path='collections' element={<Collections />} />
            </Routes>
        </div>
    );
};

export default Board;