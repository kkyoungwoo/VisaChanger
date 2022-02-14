import React from 'react';
import CountUp from 'react-countup';
import TrackVisibility from "react-on-screen";
import ScrollAnimation from "react-animate-on-scroll";

const Data = [
    {
        countNum : 199,
        countTitle: 'Happy Clients.',
    },
    {
        countNum : 575,
        countTitle: 'Employees',
    },
    {
        countNum : 69,
        countTitle: 'Useful Programs',
    },
    {
        countNum : 500,
        countTitle: 'Useful Programs',
    },
];

const SlipThree = () => {
    return (
        <div className="rn-splite-style bg-color-blackest">
            <div className="split-wrapper">
                <div className="row no-gutters radius-10 align-items-center">
                    <div className="col-lg-12 col-xl-6 col-12">
                        <div className="thumbnail">
                            <img src="./images/split/split-03.jpg" alt="split Images" />
                        </div>
                    </div>
                    <div className="col-lg-12 col-xl-6 col-12">
                        <div className="split-inner">
                            <ScrollAnimation 
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}>
                                <h4 className="title">Continue Your Business With Us.</h4>
                            </ScrollAnimation>
                            <ScrollAnimation 
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}>
                                <p className="description">Randomised words which don't look even slightly believable. If you are to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. in some form, by injectedeed bedhumour, or randomised even .</p>
                            </ScrollAnimation>

                            <div className="row">
                                {Data.map((data, index) => (
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={index}>
                                        <div className="count-box counter-style-4 text-left">
                                            <TrackVisibility once>
                                                {({ isVisible }) => isVisible && 
                                                    <div className="count-number">{isVisible ? <CountUp end={data.countNum} /> : 0}</div>}
                                            </TrackVisibility>
                                            <h5 className="counter-title">{data.countTitle}</h5>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SlipThree;