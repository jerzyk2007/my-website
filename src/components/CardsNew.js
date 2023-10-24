import React from 'react';
import CardItemNew from './CardItemNew';
import './CardsNew.css';

const Cards = () => {
    return (
        <div className='cardsnew'>
            <h1 className='cardsnew-h1'>My Projects and Experience</h1>
            <div className='cardsnew__container'>
                <CardItemNew
                    src='cryptex/cryptex.html'
                    iframeSrc='Game screenshot'
                    // title='Kryptex'
                    title='Cryptex "Da Vinci"'
                    text='Hover your mouse or tap on mobile devices.'
                    label='HTML + CSS'
                    path='/cryptex.html'
                    // description='Cryptex to fikcyjne urządzenie, które łączy w sobie pojęcia bezpiecznika i szyfru, służące do ukrywania tajnych informacji poprzez zastosowanie mechanizmu otwarcia opartego na rozwiązaniu kodu.  Choć cryptex to fikcyjny wynalazek literacki, wywołał wiele zainteresowania i kreatywnych interpretacji w rzeczywistości. To rodzaj bezpiecznika z wbudowanym mechanizmem szyfrującym, służący do przechowywania tajnych informacji. Cryptex składa się z kilku rur lub cylindrów, z których każdy ma literę alfabetu lub inny symbol. Aby otworzyć cryptex, należy ułożyć poprawny kod, który pozwoli na wyjęcie ukrytej zawartości. Choć inspiracja cryptexem jest literacka, stanowi on fascynujący przykład połączenia inżynierii i sekretnego przechowywania danych.<br/><br/>Do napisania kodu użyłem tylko HTML i CSS'
                    description="Cryptex is a fictional device that combines the concepts of a safe and a cipher, used for concealing secret information through a mechanism based on code-solving to open. Although cryptex is a literary invention, it has sparked significant interest and creative interpretations in reality. It's a type of safe with an integrated cipher mechanism for storing confidential data. A cryptex consists of multiple tubes or cylinders, each bearing a letter of the alphabet or another symbol. To open the cryptex, one must arrange the correct code, allowing access to the hidden contents. While cryptex is a product of literature-inspired imagination, it serves as a fascinating example of merging engineering and clandestine data storage.
                    I used only HTML and CSS to write the code."
                    www='cryptex'
                />
                <CardItemNew
                    src='images/robbo.png'
                    iframeSrc='/robbo/robbo.html'
                    alt='Game screenshot'
                    title='Robbo - Atari XL'
                    text='Click the link and enjoy.'
                    label='HTML + CSS + JavaScript'
                    path='/robbo.html'
                    description='Robbo" is a Polish computer puzzle and skill game, created by Janusz Pelc and released in 1989 by LK Avalon for Atari XL/XE computers. It gained significant popularity in Poland. It was later ported to various other platforms, including an MS-DOS version released in the United States under the title "Adventures of Robbo.
                    I created the game in pure JavaScript, taking inspiration from the original and striving to replicate it as accurately as possible'
                    www=''
                />
                <CardItemNew
                    src='/'
                    iframeSrc=''
                    title='My Web Site'
                    text='I created my website using React.'
                    label='REACT'
                    path='/'
                    description="My website is built using React technology, which allows for dynamic and interactive features. The website consists of various components that enable easy navigation and content exploration. Thanks to React, the website is fast and responsive, providing users with a smooth browsing experience.
                    You'll find different sections on the website, including a navigation menu, content, forms, and many other elements. I used CSS for styling to give the structure an attractive look. The website is optimized for performance and accessibility, meaning it's available to various devices and users.
                    React also allowed me to use reusable components, making code management and updates easier. The website is the result of my passion for programming and creating great online projects."
                    www='website'
                />
                <CardItemNew
                    src='/images/back-to-school-image.jpg'
                    iframeSrc=''
                    title='Memorek'
                    text="Program for learning the English language.."
                    label='REACT + NODE'
                    path='/projects'
                    description='Website under construction'
                    www=''
                />
            </div>
        </div>
    );
};

export default Cards;