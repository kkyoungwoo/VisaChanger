import React from 'react'
import { FiCheck, FiStar } from "react-icons/fi";

const AdvancePricingOne = () => {
    return (
        <div className="advance-pricing">
            <div className="inner">
                <div className="row row--0">
                    <div className="col-lg-6">
                        <div className="pricing-left">
                            <h3 className="main-title">Active Plan Mode.</h3>
                            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quisquam.</p>
                            <div className="price-wrapper">
                                <span className="price-amount">$129 <sup>/mo</sup></span>
                            </div>
                            <div className="pricing-btn-group">
                                <button className="btn-default">Purchase Now</button>
                                <button className="btn-default btn-border">Upgrade</button>
                            </div>
                            <div className="rating">
                                <a href="#rating"><FiStar /></a>
                                <a href="#rating"><FiStar /></a>
                                <a href="#rating"><FiStar /></a>
                                <a href="#rating"><FiStar /></a>
                                <a href="#rating"><FiStar /></a>
                            </div>
                            <span className="subtitle">rated 4.5/5 Stars in 1000+ reviews.</span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="pricing-right">
                            <div className="pricing-offer">
                                <div className="single-list">
                                    <h4 className="price-title">Advance Plans You can Get.</h4>
                                    <ul className="plan-offer-list">
                                        <li><FiCheck /> 5 PPC Campaigns</li>
                                        <li><FiCheck /> Digital Marketing</li>
                                        <li><FiCheck />  Marketing Agency</li>
                                        <li><FiCheck />  Seo Friendly</li>
                                    </ul>
                                </div>
                                <div className="single-list mt--40">
                                    <h4 className="price-title">Basic Plans Uou can Get.</h4>
                                    <ul className="plan-offer-list">
                                        <li><FiCheck /> 5 PPC Campaigns</li>
                                        <li><FiCheck /> Digital Marketing</li>
                                        <li><FiCheck />  Marketing Agency</li>
                                        <li><FiCheck />  Seo Friendly</li>
                                        <li><FiCheck />  App Development</li>
                                        <li><FiCheck />  Social Development</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdvancePricingOne
