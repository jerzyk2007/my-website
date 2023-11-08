import RequireAuth from './RequireAuth';
import { Routes, Route } from 'react-router-dom';
import Learn from './Learn';
import Collections from './Collections';
import Instruction from './Instruction';
import Test from './Test';
import Login from './Login';
import Search from './Search';
import Register from './Register';
import UserSettings from './UserSettings';
import AddData from './AddData';
import ChangeUserName from './ChangeUserName';
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
                <Route element={<RequireAuth allowedRoles={[100, 200]} />}>
                    <Route path='search' element={<Search />} />
                </Route>
                <Route element={<RequireAuth allowedRoles={[100, 200]} />}>
                    <Route path='user-settings' element={<UserSettings />} />
                </Route>
                <Route element={<RequireAuth allowedRoles={[100]} />}>
                    <Route path='add-data' element={<AddData />} />
                </Route>
                <Route element={<RequireAuth allowedRoles={[100]} />}>
                    <Route path='user-settings/username' element={<ChangeUserName />} />
                </Route>
                <Route element={<RequireAuth allowedRoles={[200]} />}>
                    <Route path='user-settings/register' element={<Register />} />
                </Route>

                {/* all other */}
                <Route path='*' element={<Instruction />} />
            </Routes>
        </div>
    );
};

export default Board;