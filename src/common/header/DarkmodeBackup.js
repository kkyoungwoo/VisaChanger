import React from 'react'

const Darkmode2 = () => {
    let clickedClass = 'clicked';
    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;

    if (window.localStorage) {
        theme = window.localStorage.getItem("theme")
    }
    if (theme === darkTheme || theme === lightTheme) {
        body.classList.add(theme)
    }else {
        body.classList.add(darkTheme)
    }

    const switchTheme = (e) => {
        if (theme === lightTheme) {
            body.classList.replace(lightTheme, darkTheme);
            e.target.classList.remove(clickedClass);
            window.localStorage.setItem("theme", "dark");
            theme = darkTheme;
        }else {
            body.classList.replace(darkTheme, lightTheme);
            e.target.classList.add(clickedClass);
            window.localStorage.setItem("theme", "dark");
            theme = lightTheme;
        }
    }
    
    return (
        <button className={theme === "light" ? clickedClass : ""} 
        id="darkmode"
        onClick={(e) => switchTheme(e)}
        >
           <img className="light-icon" src={`${process.env.PUBLIC_URL}/images/icons/sun-01.svg`} alt="Sun images" />
           <img className="dark-icon" src={`${process.env.PUBLIC_URL}/images/icons/vector.svg`} alt="Sun images" />
        </button>
    )
}

export default Darkmode2
