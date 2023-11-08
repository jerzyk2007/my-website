import { Link } from 'react-router-dom';
import useData from './hooks/useData';
import { SlControlPlay, SlUser, SlBookOpen, SlList, SlGraduation, SlShuffle, SlActionUndo, SlActionRedo, SlMagnifier, SlShareAlt, SlSettings } from "react-icons/sl";

import './UserMenu.css';

const UserMenu = () => {
    const { LearnOrTest, languageSwitch, setLanguageSwitch, successAuth, changeMenu, setChangeMenu } = useData();

    return (
        <div className="user-menu">
            <Link to="/memorek/" className="user-menu-link">
                <SlBookOpen />
            </Link>
            {LearnOrTest === 'learn' && changeMenu && <Link to="/memorek/learn" className="user-menu-link" >
                <SlControlPlay />
            </Link>}
            {LearnOrTest === 'test' && changeMenu && <Link to="/memorek/test" className="user-menu-link" >
                <SlGraduation />
            </Link>}
            {!changeMenu && <Link to="/memorek/search" className="user-menu-link" >
                <SlMagnifier />
            </Link>}
            {changeMenu ? <Link to="/memorek/collections" className="user-menu-link" >
                <SlList />
            </Link> : <Link to="/memorek/collections" className="user-menu-link" >
                <SlShareAlt />
            </Link>}
            {changeMenu
                ? <SlShuffle className={languageSwitch
                    ? "user-menu-button" : "user-menu-button user-menu-button--active"} onClick={() => setLanguageSwitch(!languageSwitch)} />
                :
                <Link to="/memorek/user-settings" className="user-menu-link" >
                    <SlSettings />
                </Link>}
            {!successAuth
                ? < Link to="/memorek/login" className="user-menu-link" >
                    <SlUser />
                </Link>
                : changeMenu
                    ? <SlActionUndo className="user-menu-button" onClick={() => setChangeMenu(!changeMenu)} />
                    : <SlActionRedo className="user-menu-button" onClick={() => setChangeMenu(!changeMenu)} />}
        </div >
    );
};

export default UserMenu;