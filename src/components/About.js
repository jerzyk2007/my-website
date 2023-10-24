import { useState } from 'react';
import './About.css';

const AboutMe = () => {

    const [insight, setInsight] = useState([
        "I'm a programming enthusiast, and every day, I expand my knowledge and skills.",
        "My learning is not only about acquiring theoretical knowledge but also practical experience.",
        "I regularly practice what I learn by building projects and tackling programming challenges.",
        "Learning is my passion, which is why I dedicate time to my own development every day.",
        "I'm excited that I can develop as a programmer, gain experience, and create applications.",
        "I actively bring my ideas to life by solving real programming problems.",
        "Thanks to JavaScript and React, I can experiment with various technologies.",
        "That's why I dedicate time to exploring best practices and code optimization.",
        "Learning is a true passion for me. Every day, I strive to broaden my horizons.",
        "I'm convinced that continuous learning is the key to success as a programmer."
    ]);

    // const [insight, setInsight] = useState([
    //     "Jestem pasjonatem programowania i codziennie poszerzam swoją wiedzę i umiejętności.",
    //     "Moja nauka to nie tylko zdobywanie wiedzy teoretycznej, ale także praktyczne doświadczenie.",
    //     "Regularnie praktykuję to, czego się uczę, budując projekty i rozwiązywując wyzwania programistyczne.",
    //     "Nauka jest dla mnie pasją, dlatego codziennie poświęcam czas na własny rozwój.",
    //     "Jestem podekscytowany, że mogę rozwijać się jako programista, zdobywać doświadczenie i tworzyć aplikacje.",
    //     "Staram się aktywnie wcielać w życie swoje pomysły, rozwiązując rzeczywiste problemy programistyczne.",
    //     "Dzięki HTML, CSS, JavaScript oraz React mogę eksperymentować z różnymi technologiami.",
    //     "To dlatego poświęcam czas na zgłębianie najlepszych praktyk, projektowania interfejsów i optymalizacji kodu.",
    //     "Nauka to dla mnie prawdziwa pasja. Codziennie staram się poszerzać swoje horyzonty.",
    //     "Jestem przekonany, że ciągła nauka to klucz do sukcesu jako programista."
    // ]);

    return (
        <div className='insigh__container'>
            <div className="insigh__container__box">
                {insight.map((text, index) => (
                    <span key={index} style={{ '--i': index + 1 }}>
                        <p className={`span__p span__p-${index}`}>{text}</p>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default AboutMe;