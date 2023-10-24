import React from 'react';
import './OldHTMLPgae.css';

class OldHTMLPage extends React.Component {
    render() {
        const { iframeSrc } = this.props;
        return (
            <div className='odlHtmlPage'>
                <iframe
                    src={iframeSrc}
                />
            </div>
        );
    }
}

export default OldHTMLPage;
