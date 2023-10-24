import React from 'react';
import './EmbeddedPage .css';

class EmbeddedPage extends React.Component {
    render() {
        const { src, title } = this.props;

        return (
            <div className='iframe-container'>
                <iframe
                    src={src}
                    title={title}
                />
            </div>
        );
    }
}

export default EmbeddedPage;