import { useContext } from 'react';
import DataContext from './context/DataContext';
import './Collections.css';
import CollectionName from './CollectionName';

const Collections = () => {
    const { collectionsName } = useContext(DataContext);
    const collectionElements = collectionsName.map((element, index) => (
        <CollectionName key={index} name={element} />
    ));

    return (
        <div className='collections'>
            {collectionElements}
        </div>
    );
};

export default Collections;