import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from './context/DataContext';
import './CollectionName.css';

const CollectionName = ({ name }) => {
    const { fetchPhrases } = useContext(DataContext);
    const navigate = useNavigate();

    const handleCollection = async () => {
        try {
            await fetchPhrases(name);
            navigate('/memorek/learn');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="collection-name">
            <p className='collection-name-title'>{name}</p>
            <button className='collection-name-button' onClick={handleCollection}>Learn</button>
            {/* <button className='collection-name-button'>Test</button> */}
        </div>
    );
};

export default CollectionName;