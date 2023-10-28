import './CollectionName.css';
const CollectionName = ({ name }) => {
    return (
        <div className="collection-name">
            <p className='collection-name-title'>{name}</p>
            <button className='collection-name-button'>Learn</button>
            <button className='collection-name-button'>Test</button>
        </div>
    );
};

export default CollectionName;