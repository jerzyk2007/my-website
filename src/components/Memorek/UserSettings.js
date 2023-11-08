import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';
import { FiX } from "react-icons/fi";
import useData from './hooks/useData';
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
            <button className="user-settings-button" >Change user name</button>
            <button className="user-settings-button" >Change password</button>
            <button className="user-settings-button" >Log out</button>
            <FiX className='user-settings-close-button' onClick={() => navigate(-1)} />
        </section>
    );
};

export default UserSettings;