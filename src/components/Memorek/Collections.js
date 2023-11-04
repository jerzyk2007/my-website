import { useContext } from 'react';
import DataContext from './context/DataProvider';
import './Collections.css';
import CollectionName from './CollectionName';

const Collections = () => {
    const { collectionsName } = useContext(DataContext);
    const collectionElements = collectionsName.map((element, index) => (
        <CollectionName key={index} name={element} />
    ));

    return (
        <div className='collections'>
            <h2 className='collections-title'>Select collection</h2>
            {collectionElements}
        </div>
    );
};

export default Collections;