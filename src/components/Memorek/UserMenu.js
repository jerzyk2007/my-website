import { Link } from 'react-router-dom';
import useData from './hooks/useData';
import { SlControlPlay, SlUserFollowing, SlBookOpen, SlList, SlGraduation, SlShuffle, SlActionUndo, SlActionRedo, SlMagnifier, SlNote, SlShareAlt, SlUserUnfollow, SlUserFollow } from "react-icons/sl";

import './UserMenu.css';

const UserMenu = () => {
    const { LearnOrTest, languageSwitch, setLanguageSwitch, auth, successAuth, changeMenu, setChangeMenu } = useData();

    return (
        <div className="user-menu">
            {changeMenu ? !auth?.roles?.includes(200) && <Link to="/memorek/" className="user-menu-link">
                <SlBookOpen />
            </Link> : !auth?.roles?.includes(200) && <Link to="/memorek/" className="user-menu-link">
                <SlBookOpen />
            </Link>}
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
                : <SlUserUnfollow className="user-menu-button" />}
            {auth?.roles?.includes(200) && <Link to="/memorek/collections" className="user-menu-link" >
                <SlUserFollow />
            </Link>}
            {!successAuth
                ? < Link to="/memorek/login" className="user-menu-link" >
                    <SlUserFollowing />
                </Link>
                : changeMenu
                    ? <SlActionUndo className="user-menu-button" onClick={() => setChangeMenu(!changeMenu)} />
                    : <SlActionRedo className="user-menu-button" onClick={() => setChangeMenu(!changeMenu)} />}
        </div >
    );
};

export default UserMenu;