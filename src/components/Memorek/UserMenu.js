import { SlPencil, SlControlPlay, SlNote, SlUser, SlLike, SlDislike, SlMagnifier, SlBookOpen } from "react-icons/sl";
import './UserMenu.css';

const UserMenu = () => {
    return (
        <div className="user-menu">
            <SlControlPlay className="user-menu-button" />
            <SlBookOpen className="user-menu-button" />
            <SlMagnifier className="user-menu-button" />
            <SlUser className="user-menu-button" />
        </div>
    );
};

export default UserMenu;