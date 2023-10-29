import { Link } from 'react-router-dom';
import { SlControlPlay, SlUser, SlBookOpen, SlList } from "react-icons/sl";
import './UserMenu.css';

const UserMenu = () => {

    return (
        <div className="user-menu">
            <Link to="/memorek/" className="user-menu-link">
                <SlBookOpen />
            </Link>
            <Link to="/memorek/learn" className="user-menu-link" >
                <SlControlPlay />
            </Link>
            <Link to="/memorek/collections" className="user-menu-link" >
                <SlList />
            </Link>
            <Link to="/memorek/login" className="user-menu-link" >
                <SlUser />
            </Link>
        </div>
    );
};

export default UserMenu;