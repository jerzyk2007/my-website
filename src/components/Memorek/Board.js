import { Routes, Route } from 'react-router-dom';
import Learn from './Learn';
import Collections from './Collections';
import Instruction from './Instruction';
import Test from './Test';
import './Board.css';

const Board = () => {

    return (
        <div className='board'>
            <Routes>
                <Route path='/' element={<Instruction />} />
                <Route path='learn' element={<Learn />} />
                <Route path='collections' element={<Collections />} />
                <Route path='test' element={<Test />} />
                <Route path='*' element={<Instruction />} />
            </Routes>
        </div>
    );
};

export default Board;