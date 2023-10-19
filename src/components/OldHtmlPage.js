import React from 'react';
import './OldHtmlPage.css';

class OldHtmlPage extends React.Component {
    render() {
        const { iframeSrc, title } = this.props;
        return (
            <div className='odlHtmlPage'>
                <iframe
                    className='odlHtmlPage__container'
                    title={title}
                    src={iframeSrc}
                />
            </div>
        );
    }
}

export default OldHtmlPage;