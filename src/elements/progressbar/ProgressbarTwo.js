import React from 'react';
import TrackVisibility from "react-on-screen";
import Skill from "./Skill";

const progressData = [
    {
      id: 1,
      title: "Web Development",
      percantage: 90,
      progressColor: "#059DFF",
    },
    {
      id: 2,
      title: "Photoshop Design",
      percantage: 75,
      progressColor: "#059DFF",
    },
    {
      id: 3,
      title: "App Development",
      percantage: 70,
      progressColor: "#059DFF",
    },
    {
      id: 4,
      title: "Application Development",
      percantage: 80,
      progressColor: "#059DFF",
    },
];

const ProgressbarTwo = () => {
    return (
        <>
            {progressData.map((progress) => (
            <TrackVisibility
                once
                key={progress.id}
                className="single-progress"
            >
                <Skill progress={progress} /> 
            </TrackVisibility>
            ))} 
        </>
    )
}

export default ProgressbarTwo;
