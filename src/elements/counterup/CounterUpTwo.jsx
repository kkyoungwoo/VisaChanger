import React from 'react';
import CountUp from 'react-countup';
import TrackVisibility from "react-on-screen";

const Data = [
    {
        countNum : 100,
        countTitle: '형사 사건 해결',
    },{
        countNum : 1,
        countTitle: '하루 평균 상담 수',
    }
];
const CounterUpTwo = ({textALign, counterStyle, column}) => {
    return (
        <div className="row">
            {Data.map((data, index) => (
                <div className={`${column}`} key={index}>
                    <div className={`count-box ${counterStyle} ${textALign}`}>
                        <TrackVisibility className="center" once>
                            {({ isVisible }) => isVisible && 
                                <div className="count-number">{isVisible ? <CountUp end={data.countNum} /> : 0}</div>}
                        </TrackVisibility>
                        <h5 className="counter-title">{data.countTitle}</h5>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default CounterUpTwo;