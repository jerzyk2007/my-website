import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './Memorek.css';
import UserMenu from "./UserMenu";
import Board from "./Board";
import { DataProvider } from "./context/DataContext";
import Instruction from './Instruction';
import Learn from './Learn';
import Collections from './Collections';

const Memorek = () => {

    return (
        <div className='memorek'>
            <h2 className="memorek-title">Memorek</h2>
            <DataProvider>
                <Board />
                <UserMenu />
            </DataProvider>
        </div>
    );
};

export default Memorek;