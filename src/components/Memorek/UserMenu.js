import { useContext } from "react";
import DataContext from "./context/DataContext";
import { SlPencil, SlControlPlay, SlNote, SlUser, SlLike, SlDislike, SlMagnifier, SlBookOpen } from "react-icons/sl";
import './UserMenu.css';

const UserMenu = () => {
    const { board, setBoard, setCollections, } = useContext(DataContext);

    const handleBoard = (boardName) => {
        const updatedBoard = { ...board };
        for (const key in updatedBoard) {
            updatedBoard[key] = false;
        }
        updatedBoard[boardName] = true;
        setBoard(updatedBoard);
        if (boardName === 'learn') {
            setCollections('phrases');
        }
        else {
            setCollections(boardName);
        }
    };

    return (
        <div className="user-menu">
            <SlControlPlay className="user-menu-button" onClick={() => handleBoard('learn')} />
            <SlBookOpen className="user-menu-button" onClick={() => handleBoard('collections')} />
            <SlMagnifier className="user-menu-button" />
            <SlUser className="user-menu-button" />
        </div>
    );
};

export default UserMenu;