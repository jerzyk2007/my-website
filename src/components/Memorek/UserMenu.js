import { Link } from 'react-router-dom';
import { SlControlPlay, SlUser, SlBookOpen, SlList, SlGraduation, SlShuffle } from "react-icons/sl";
import { useContext } from 'react';
import DataContext from './context/DataProvider';
import './UserMenu.css';

const UserMenu = () => {

    const { LearnOrTest, languageSwitch, setLanguageSwitch } = useContext(DataContext);

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
            <SlShuffle className={languageSwitch ? "user-menu-button" : "user-menu-button user-menu-button--active"} onClick={() => setLanguageSwitch(!languageSwitch)} />
            <Link to="/memorek/login" className="user-menu-link" >
                <SlUser />
            </Link>
        </div>
    );
};

export default UserMenu;