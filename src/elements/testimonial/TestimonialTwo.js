import React from 'react';

const TestimonialData =  {
        id: "01",
        form: "Poland",
        description: "What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.",
        name: "John Due",
        subtitle: "App Developer",
        image: "testimonial-dark-01",
    }



const TestimonialTwo = ({column , teamStyle}) => {
    return (
        <div className="row">
            <div className={`${column}`}>
                <div className={`testimonial-style-two ${teamStyle}`}>
                    <div className="row align-items-center row--20">
                        <div className="order-2 order-md-1 col-lg-6 col-md-8 offset-lg-1">
                            <div className="content mt_sm--40">
                                <span className="form">{TestimonialData.form}</span>
                                <p className="description">{TestimonialData.description}</p>
                                <div className="client-info">
                                    <h4 className="title">{TestimonialData.name}</h4>
                                    <h6 className="subtitle">{TestimonialData.subtitle}</h6>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 order-md-2 col-lg-4 col-md-4">
                            <div className="thumbnail">
                                <img className="w-100" src={`./images/testimonial/${TestimonialData.image}.jpg`} alt="Corporate React Template" />
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        
    )
}
export default TestimonialTwo;