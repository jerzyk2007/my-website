import { useNavigate } from "react-router";
import useData from './hooks/useData';
import { Link } from 'react-router-dom';
import { FiX } from "react-icons/fi";
import Register from './Register';
import './UserSettings.css';

const UserSettings = () => {
    const { auth } = useData();
    const navigate = useNavigate();

    const handleClick = () => {
        console.log(auth.roles);
    };

    return (
        <section className='user-settings'>
            {auth?.roles?.includes(200) &&
                <Link to="/memorek/user-settings/register" className="user-settings-link" >
                    <button className="user-settings-button" onClick={handleClick} >Register new user</button>
                </Link>}
            <Link to="/memorek/user-settings/username" className="user-settings-link" >
                <button className="user-settings-button" >Change user name</button>
            </Link>
            <Link to="/memorek/user-settings/changepass" className="user-settings-link" >
                <button className="user-settings-button" >Change password</button>
            </Link>
            <Link to="/memorek/user-settings/logout" className="user-settings-link" >
                <button className="user-settings-button" >Log out</button>
            </Link>

            <FiX className='user-settings-close-button' onClick={() => navigate(-1)} />
        </section>
    );
};

export default UserSettings;