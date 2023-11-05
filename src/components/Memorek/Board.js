import RequireAuth from './RequireAuth';
import { Routes, Route } from 'react-router-dom';
import Learn from './Learn';
import Collections from './Collections';
import Instruction from './Instruction';
import Test from './Test';
import Login from './Login';
import Search from './Search';
import './Board.css';

const Board = () => {

    return (
        <div className='board'>
            <Routes>
                {/* public routes*/}
                <Route path='/' element={<Instruction />} />
                <Route path='learn' element={<Learn />} />
                <Route path='collections' element={<Collections />} />
                <Route path='test' element={<Test />} />
                <Route path='login' element={<Login />} />

                {/* protected routes */}
                <Route element={<RequireAuth />}>
                    <Route path='search' element={<Search />} />
                </Route>

                {/* all other */}
                <Route path='*' element={<Instruction />} />
            </Routes>
        </div>
    );
};

export default Board;