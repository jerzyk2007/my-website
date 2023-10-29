import { useContext } from "react";
import DataContext from "./context/DataContext";
import { SlControlPlay, SlUser, SlMagnifier, SlBookOpen, SlList } from "react-icons/sl";
import './UserMenu.css';

const UserMenu = () => {
    const { handleChangeBoard } = useContext(DataContext);

    return (
        <div className="user-menu">
            <SlBookOpen className="user-menu-button" onClick={() => handleChangeBoard('instruction')} />
            <SlControlPlay className="user-menu-button" onClick={() => handleChangeBoard('learn')} />
            <SlList className="user-menu-button" onClick={() => handleChangeBoard('collections')} />
            {/* <SlMagnifier className="user-menu-button" /> */}
            <SlUser className="user-menu-button" />
        </div>
    );
};

export default UserMenu;