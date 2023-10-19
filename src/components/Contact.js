import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <span className="contact__text">Contact:</span>
            <span className="contact__text">jerzykomorowski77@gmail.com</span>
            <span className="contact__text"><a className='contact__link' href="mailto:jerzykomorowski77@gmail.com">Send email</a></span>
        </div>
    );
};

export default Contact;