import React from 'react';
import './OldHtmlPage.css';

class OldHtmlPage extends React.Component {
    render() {
        const { iframeSrc } = this.props;
        return (
            <div className='odlHtmlPage'>
                <iframe
                    className='odlHtmlPage__container'
                    src={iframeSrc}
                />
            </div>
        );
    }
}

export default OldHtmlPage;