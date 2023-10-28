import { useContext } from 'react';
import DataContext from './context/DataContext';
import Learn from './Learn';
import Collections from './Collections';
import './Board.css';

const Board = () => {
    const { board } = useContext(DataContext);

    return (
        <div className='board'>
            {board.learn && < Learn />}
            {board.collections && < Collections />}
        </div>
    );
};

export default Board;