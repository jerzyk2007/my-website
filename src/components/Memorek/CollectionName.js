import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from './context/DataContext';
import './CollectionName.css';

const CollectionName = ({ name }) => {
    const { fetchPhrases, setLearnOrTest } = useContext(DataContext);
    const navigate = useNavigate();

    const handleLearn = async () => {
        try {
            await fetchPhrases(name);
            setLearnOrTest('learn');
            navigate('/memorek/learn');
        } catch (err) {
            console.log(err);
        }
    };

    const handleTest = async () => {
        try {
            setLearnOrTest('test');
            navigate('/memorek/test');
        }
        catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="collection-name">
            <p className='collection-name-title'>{name}</p>
            <button className='collection-name-button' onClick={handleLearn}>Learn</button>
            <button className='collection-name-button' onClick={handleTest}>Test</button>
        </div>
    );
};

export default CollectionName;