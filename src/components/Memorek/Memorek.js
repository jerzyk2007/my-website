import { useState, useEffect } from "react";
import './Memorek.css';
import UserMenu from "./UserMenu";
import Board from "./Board";
import { DataProvider } from "./context/DataContext";

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