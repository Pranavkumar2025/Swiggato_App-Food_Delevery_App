
import React, { useState, useEffect } from "react";

const About = () => {
    const [mydata, setmydata] = useState({});

    useEffect(() => {
        const DeveloperApi = async () => {
            try {
                const ApiData = await fetch("https://api.github.com/users/Pranavkumar2025");
                const jsonApiData = await ApiData.json();
                setmydata(jsonApiData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        DeveloperApi();
    }, []);

    return (
        <>
            <h1>Swiggato App</h1>
            <h1>Developer Details</h1>
            <h2>Name: {mydata.name}</h2>
            <img src={mydata.avatar_url} alt="Avatar" style={{borderRadius:"50%",border:"6px solid purple"}}/>
            <h2>Bio: {mydata.bio}</h2>
        </> 
    );
}

export default About;
