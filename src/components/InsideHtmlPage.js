import React from 'react';
import './InsideHtmlPage.css';

class InsideHtmlPage extends React.Component {
    render() {
        const { src, title } = this.props;

        return (
            <div className='insideHtmlPage'>
                <iframe
                    className='insideHtmlPage__container'
                    src={src}
                    title={title}
                />
            </div>
        );
    }
}

export default InsideHtmlPage;