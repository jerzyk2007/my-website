import { useState, useEffect } from "react";
import './Memorek.css';
import UserMenu from "./UserMenu";
import Board from "./Board";

const Memorek = () => {

    return (
        <div className='memorek'>
            <h1 className="memorek-title">Memorek</h1>
            <Board />
            <UserMenu />
        </div>
    );
};

export default Memorek;