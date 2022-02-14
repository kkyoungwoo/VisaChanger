import React from 'react';
import TrackVisibility from "react-on-screen";
import Skill from "./Skill";

const progressData = [
    {
      id: 1,
      title: "Web Development",
      percantage: 90,
      progressColor: "radial-gradient(circle farthest-corner at 0% 0%, var(--color-pink) 25%, var(--color-secondary) 45%, var(--color-primary) 65%, var(--color-light-green) 85%)",
    },
    {
      id: 2,
      title: "Photoshop Design",
      percantage: 75,
      progressColor: "radial-gradient(circle farthest-corner at 0% 0%, var(--color-pink) 25%, var(--color-secondary) 45%, var(--color-primary) 65%, var(--color-light-green) 85%)",
    },
    {
      id: 3,
      title: "App Development",
      percantage: 70,
      progressColor: "radial-gradient(circle farthest-corner at 0% 0%, var(--color-pink) 25%, var(--color-secondary) 45%, var(--color-primary) 65%, var(--color-light-green) 85%)",
    },
    {
      id: 4,
      title: "Application Development",
      percantage: 80,
      progressColor: "radial-gradient(circle farthest-corner at 0% 0%, var(--color-pink) 25%, var(--color-secondary) 45%, var(--color-primary) 65%, var(--color-light-green) 85%)",
    },
];



const ProgressbarThree = () => {
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

export default ProgressbarThree;
