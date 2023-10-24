import { useState } from 'react';
import './AboutMe.css';

const AboutMe = () => {

    const [insight, setInsight] = useState([
        "Jestem pasjonatem programowania i codziennie poszerzam swoją wiedzę i umiejętności. Obecnie uczę się  React i Node, aby tworzyć nowoczesne aplikacje internetowe.",

        "Moja nauka to nie tylko zdobywanie wiedzy teoretycznej, ale także praktyczne doświadczenie. Regularnie praktykuję to, czego się uczę, budując projekty i rozwiązywując wyzwania programistyczne.",

        "Cieszę się, że mogę eksperymentować z różnymi technologiami, tworzyć interaktywne strony internetowe za pomocą HTML, stylizować je za pomocą CSS i tworzyć dynamiczne funkcje z wykorzystaniem JavaScript i React.",

        "Rozwijanie się jako programista to dla mnie nie tylko nauka nowych języków i frameworków, ale także zdobywanie wiedzy na temat najlepszych praktyk, projektowania interfejsów i optymalizacji kodu.",

        "Nauka jest dla mnie pasją, dlatego codziennie poświęcam czas na samodzielne badania, czytanie dokumentacji i udział w społeczności programistycznej, aby poznać nowe trendy i wyzwania w świecie IT.",

        "Jestem podekscytowany, że mogę rozwijać się jako programista, zdobywać doświadczenie i tworzyć aplikacje, które mają potencjał zmieniać sposób, w jaki ludzie korzystają z technologii.",

        "Dla mnie, programowanie to nie tylko skupianie się na teorii, ale także na praktyce. Staram się aktywnie wcielać w życie swoje pomysły, budując projekty i rozwiązując rzeczywiste problemy programistyczne.",

        "Jestem podekscytowany możliwością tworzenia interaktywnych i atrakcyjnych stron internetowych. Dzięki HTML, CSS, JavaScript oraz React mogę eksperymentować z różnymi technologiami i dostarczać wartość użytkownikom.",

        "Jako programista, dążę nie tylko do nauki nowych języków i frameworków, ale także do zrozumienia, jak tworzyć bardziej efektywny i czytelny kod. To dlatego poświęcam czas na zgłębianie najlepszych praktyk, projektowania interfejsów i optymalizacji kodu.",

        "Nauka to dla mnie prawdziwa pasja. Codziennie staram się poszerzać swoje horyzonty, czytając dokumentację, uczestnicząc w dyskusjach społeczności programistycznej i śledząc nowe trendy w świecie IT. Jestem przekonany, że ciągła nauka to klucz do sukcesu jako programista."
    ]);

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
