import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const TimelineData = [
    {
        id: "1",
        title: "상담",
        description: "원하는 방향으로 문제를 해결할 수 있는지 안내해 드립니다.",
    },
    {
        id: "2",
        title: "계약",
        description: "계약이 성사되면 필요한 자료를 요청드릴 수 있습니다.",
    },
    {
        id: "3",
        title: "진행",
        description: "THE K의 노하우로 예상 일정 안내와 함께 업무를 진행합니다.",
    },
    {
        id: "4",
        title: "해결",
        description: "온라인 또는 오프라인으로 해결완료 안내를 받을 수 있습니다.",
    },
]

const TimelineTwo = ({classVar}) => {
    return (
        <div className="timeline-style-two bg-color-blackest">
            <div className="row row--0">
                {/* Start Single Progress */}
                {TimelineData.map((data , index) =>(
                    <div className={`col-lg-3 col-md-3 rn-timeline-single ${classVar}`} key={index}>
                        <div className="rn-timeline">
                            <ScrollAnimation 
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}>
                                <h6 className="title">{data.title}</h6>
                            </ScrollAnimation>
                            <div className="progress-line">
                                <div className="line-inner"></div>
                            </div>
                            <div className="progress-dot">
                                <div className="dot-level">
                                    <div className="dot-inner"></div>
                                </div>
                            </div>
                            <ScrollAnimation 
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}>
                                <p className="description">{data.description}</p>
                            </ScrollAnimation>
                        </div>
                    </div>
                ))}
                {/* End Single Progress */}
            </div>
        </div>
    )
}
export default TimelineTwo;