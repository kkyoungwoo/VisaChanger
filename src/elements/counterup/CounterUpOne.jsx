import React from 'react';
import CountUp from 'react-countup';
import TrackVisibility from "react-on-screen";

const Data = [
    {
        countNum : 1000,
        countTitle: '의뢰인',
    },
    {
        countNum : 100,
        countTitle: '소개받은 의뢰인',
    },
    {
        countNum : 100,
        countTitle: '재방문 의뢰인',
    },
    {
        countNum : 10,
        countTitle: '파트너',
    },
];
const CounterUpOne = ({textALign, counterStyle, column}) => {
    return (
        <div className="row">
            {Data.map((data, index) => (
                <div className={`${column}`} key={index}>
                    <div className={`count-box ${counterStyle} ${textALign}`}>
                        <TrackVisibility once>
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
export default CounterUpOne;