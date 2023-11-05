import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useData from './hooks/useData';
import { LuLoader } from "react-icons/lu";
import './CollectionName.css';

const CollectionName = ({ name }) => {
    const { fetchPhrases, setLearnOrTest, fetchTestPhrases } = useData();
    const [isLoading, setIseLoading] = useState(false);
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
            setIseLoading(true);
            await fetchTestPhrases(name);
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
            <button className='collection-name-button collection-name-button--test' onClick={handleTest}>Test</button>
            {isLoading && <div className='collection-name__loading'>
                <p className='collection-name__loading-title'>Data is loading...</p>
                <LuLoader className='collection-name__loading-icon' />
            </div>}
        </div>
    );
};

export default CollectionName;;