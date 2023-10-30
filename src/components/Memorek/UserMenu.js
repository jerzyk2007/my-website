import { Link } from 'react-router-dom';
import { SlControlPlay, SlUser, SlBookOpen, SlList, SlGraduation } from "react-icons/sl";
import { useContext } from 'react';
import DataContext from './context/DataContext';
import './UserMenu.css';

const UserMenu = () => {

    const { LearnOrTest } = useContext(DataContext);

    return (
        <div className="user-menu">
            <Link to="/memorek/" className="user-menu-link">
                <SlBookOpen />
            </Link>
            {LearnOrTest === 'learn' && <Link to="/memorek/learn" className="user-menu-link" >
                <SlControlPlay />
            </Link>}
            {LearnOrTest === 'test' && <Link to="/memorek/test" className="user-menu-link" >
                <SlGraduation />
            </Link>}
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