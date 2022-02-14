import React from 'react';
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        icon: '1',
        title: 'Awarded Design',
        description: 'There are many variations variations have.'
    },
    {
        icon: '2',
        title: 'Design & Creative',
        description: 'Passages there are many variations have.'
    },
    {
        icon: '3',
        title: 'App Development',
        description: 'Variations There variations many Lorem Ipsum.'
    },
    {
        icon: '4',
        title: 'Product Designer',
        description: 'Variations There variations of Lorem Ipsum.'
    },
]

const ServiceFour = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="icon">
                                <div className="line"></div>
                                {val.icon}
                            </div>
                            <div className="content">
                                <h4 className="title"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceFour;