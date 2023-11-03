import { SlControlPlay, SlUser, SlBookOpen, SlList, SlGraduation } from "react-icons/sl";
import './Instruction.css';

const Instruction = () => {
    return (
        <div className="instruction">
            <h2 className="instruction-title">Instruction</h2>
            <p className='instruction-text'>
                Memorek is designed for vocabulary and phrase learning. Learning involves displaying a question in the upper window, with the answer hidden, clicking the lower window reveals the answer.
            </p>
            <section className='instruction__icon'>
                <SlBookOpen className="instruction-button" />
                <span className="instruction-info">Instruction.</span>
            </section>
            <section className='instruction__icon'>
                <SlControlPlay className="instruction-button" />
                <span className="instruction-info">Learning and knowledge assessment.</span>
            </section>
            <section className='instruction__icon'>
                <SlGraduation className="instruction-button" />
                <span className="instruction-info">Test your knowledge.</span>
            </section>
            <section className='instruction__icon'>
                <SlList className="instruction-button" />
                <span className="instruction-info">Select a vocabulary database</span>
            </section>
            <section className='instruction__icon'>
                <SlUser className="instruction-button" />
                <span className="instruction-info">Log in and add new phrases.</span>
            </section>
        </div>
    );
};

export default Instruction;