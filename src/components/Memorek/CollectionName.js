import { useContext } from 'react';
import DataContext from './context/DataContext';
import './CollectionName.css';

const CollectionName = ({ name }) => {
    const { setCollections, handleChangeBoard } = useContext(DataContext);

    const handleCollection = () => {
        setCollections(name);
        handleChangeBoard('learn');
    };

    return (
        <div className="collection-name">
            <p className='collection-name-title'>{name}</p>
            <button className='collection-name-button' onClick={handleCollection}>Learn</button>
            <button className='collection-name-button'>Test</button>
        </div>
    );
};

export default CollectionName;