import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const testimonialData = [
    {
        image: 'testimonial-01',
        name: 'Sr Janen Sara',
        designation: 'Sr Product Designer',
        location: 'CO Miego, AD, USA', 
        description: '“Proin libero vel lorem dui lupus est aliquet luctus purus justo eget libero sed lorem.„',
       
    },
    {
        image: 'testimonial-02',
        name: 'Afsana Nila',
        designation: 'App Developer',
        location: 'Bangladesh', 
        description: '“Proin libero vel lorem dui lupus est aliquet luctus purus justo eget libero sed lorem.„',
      
    },
    {
        image: 'testimonial-03',
        name: 'Afanan Sifa',
        designation: 'Accounts Manager',
        location: 'Poland', 
        description: '“Proin libero vel lorem dui lupus est aliquet luctus purus justo eget libero sed lorem.„',
    },
]


const TestimonialOne = ({column , teamStyle}) => {
    return (
        <div className="row row--15">
            {testimonialData.map((data, index) => (
                <div className={`${column}`} key={index}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`rn-box-card ${teamStyle}`}>
                            <div className="inner">
                                <figure className="thumbnail">
                                    <img src={`./images/testimonial/${data.image}.jpg`} alt="Corporate React Template" />
                                </figure>
                                <figcaption className="content">
                                    <p className="description">{data.description}</p>
                                    <h2 className="title">{data.name}</h2>
                                    <h6 className="subtitle theme-gradient">{data.designation}</h6>
                                </figcaption>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}

export default TestimonialOne;
