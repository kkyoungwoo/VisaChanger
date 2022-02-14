import React from 'react';
import Typed from 'react-typed';
import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import AccordionOne from '../accordion/AccordionOne';

const mission = () => {
    return (
        <div className="rn-company-mission-are rn-section-gap">
            <div className="container">
                <div className="row row--30">
                    <div className="col-lg-6">
                        <div className="mission-title">
                            <h2 className="title">Unique Mission <br /> {" "}
                                <Typed className="theme-gradient"
                                    strings={[
                                        "Consulting.",
                                        "Vission.",
                                        "Agency.",
                                    ]}
                                    typeSpeed={80}
                                    backSpeed={5}
                                    backDelay={1000}
                                    loop
                                />
                            </h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia quaerat dolore laboriosam ea minus dignissimos, laudantium odit officia soluta, et deleniti fugit deserunt saepe, velit sapiente obcaecati? Vitae, iusto delectus?</p>

                            <p>Consectetur adipisicing elit. Quia quaerat dolore laboriosam ea minus dignissimos, laudantium odit officia soluta, et deleniti fugit deserunt saepe, velit sapiente obcaecati? Vitae, iusto delectus?</p>

                            <div className="read-more-btn mt--50">
                                <Link className="btn-default btn-icon" to="#">Learn More <i className="icon"><FiArrowRight /></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt_md--30 mt_sm--30">
                        <AccordionOne customStyle="" />
                    </div>
                </div>
            </div>                        
        </div>
    )
}
export default mission;
