import React, { useState } from 'react';
const About = () => {
    const [pageTitle, setpageTitle] = useState("About Page");
    const changeTitle = () => {
        setpageTitle("About Page Title");
    }
    return (
        <div>
            <h1>{pageTitle}</h1>
            <button onClick={changeTitle}>Change Title</button>
        </div>
    );

}

export default About;

