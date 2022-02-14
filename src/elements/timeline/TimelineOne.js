import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const TimelineData = [
    {
        id: "1",
        date: "Step-1",
        title: "Your working process you can present.",
        description: "Lorem ipsum dolor sit amet at — consectetur adipisicing elit. Hic, expedita. Incidunt laboriosam.",
        image: "timeline-01",
        workingStep: [
            {
                stepTitle: "Gain your works",
                stepDescription: "Lorem ipsum dolor sit amet at consectetur adipisicing",
            },
            {
                stepTitle: "Working process",
                stepDescription: "Lorem ipsum dolor sit amet at consectetur adipisicing",
            },
        ]
    },
    {
        id: "2",
        date: "Step-2",
        title: "Our compnay working process to present.",
        description: "Lorem ipsum dolor sit amet at — consectetur adipisicing elit. Hic, expedita. Incidunt laboriosam.",
        image: "timeline-02",
        workingStep: [
            {
                stepTitle: "Follow this process",
                stepDescription: "Lorem ipsum dolor sit amet at consectetur adipisicing",
            },
            {
                stepTitle: "Working experience",
                stepDescription: "Lorem ipsum dolor sit amet at consectetur adipisicing",
            },
        ]
    },
]

const TimelineOne = () => {
    return (
        <div className="rn-timeline-wrapper timeline-style-one position-relative">
            <div className="timeline-line"></div>
            {/* Start Single Timeline  */}

            {TimelineData.map((data, index) =>(
                <div className="single-timeline mt--50" key={index}>
                    <div className="timeline-dot">
                        <div className="time-line-circle"></div>
                    </div>
                    <div className="single-content">
                        <div className="inner">
                            <div className="row row--30 align-items-center">
                                <div className="order-2 order-lg-1 col-lg-6 mt_md--40 mt_sm--40">
                                    <div className="content">
                                        <ScrollAnimation 
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}>
                                            <span className="date-of-timeline">{data.date}</span>
                                        </ScrollAnimation>

                                        <ScrollAnimation 
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}>
                                            <h2 className="title">{data.title}</h2>
                                        </ScrollAnimation>

                                        <ScrollAnimation 
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}>
                                            <p className="description">{data.description}</p>
                                        </ScrollAnimation>

                                        <div className="row row--30">
                                            {data.workingStep.map((data, index)=>(
                                                <div className="col-lg-6 col-md-6 col-12" key={index}>
                                                    <div className="working-list">
                                                        <ScrollAnimation 
                                                        animateIn="fadeInUp"
                                                        animateOut="fadeInOut"
                                                        animateOnce={true}>
                                                            <h5 className="working-title">{data.stepTitle}</h5>
                                                        </ScrollAnimation>

                                                        <ScrollAnimation 
                                                        animateIn="fadeInUp"
                                                        animateOut="fadeInOut"
                                                        animateOnce={true}>
                                                            <p>{data.stepDescription}</p>
                                                        </ScrollAnimation>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="read-morebtn">
                                            <ScrollAnimation 
                                            animateIn="fadeInUp"
                                            animateOut="fadeInOut"
                                            animateOnce={true}>
                                                <a className="btn-default btn-large round" href="/contact"><span>Get Started Now</span></a>
                                            </ScrollAnimation>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-1 order-lg-2 col-lg-6">
                                    <div className="thumbnail">
                                        <img className="w-100" src={`./images/timeline/${data.image}.jpg`} alt="Corporate React Template" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
           
            {/* End Single Timeline  */}
        </div>
    )
}

export default TimelineOne;
