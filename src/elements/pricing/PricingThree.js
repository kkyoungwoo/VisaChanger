import React from 'react';
import { FiCheck } from "react-icons/fi";


const PricingThree = () => {
    return (
        <div className="row">
            <div className="col-lg-8 offset-lg-2">
                <div className="row row--0">
                    {/* Start PRicing Table Area  */}
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="rn-pricing style-2">
                            <div className="pricing-table-inner">
                                <div className="pricing-header">
                                    <h4 className="title">Basic</h4>
                                    <div className="pricing">
                                        <div className="price-wrapper">
                                            <span className="currency">$</span>
                                            <span className="price">29</span>
                                        </div>
                                        <span className="subtitle">USD Per Month</span>
                                    </div>
                                </div>
                                <div className="pricing-body">
                                    <ul className="list-style--1">
                                        <li><FiCheck /> 5 PPC Campaigns</li>
                                        <li><FiCheck /> Digital Marketing</li>
                                        <li><FiCheck /> Marketing Agency</li>
                                        <li><FiCheck /> Seo Friendly</li>
                                        <li><FiCheck /> UI/UX designs</li>
                                    </ul>
                                </div>
                                <div className="pricing-footer">
                                    <a className="btn-default btn-border" href="#pricing">Purchase Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End PRicing Table Area  */}

                    {/* Start PRicing Table Area  */}
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="rn-pricing style-2 active">
                            <div className="pricing-table-inner">
                                <div className="pricing-header">
                                    <h4 className="title">Standard</h4>
                                    <div className="pricing">
                                        <div className="price-wrapper">
                                            <span className="currency">$</span>
                                            <span className="price">50</span>
                                        </div>
                                        <span className="subtitle">USD Per Month</span>
                                    </div>
                                </div>
                                <div className="pricing-body">
                                    <ul className="list-style--1">
                                        <li><FiCheck /> 5 PPC Campaigns</li>
                                        <li><FiCheck /> Keep 100% Royalties</li>
                                        <li><FiCheck /> App Development</li>
                                        <li><FiCheck /> Seo Friendly</li>
                                        <li><FiCheck /> UI/UX designs</li>
                                    </ul>
                                </div>
                                <div className="pricing-footer">
                                    <a className="btn-default" href="#pricing">Purchase Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End PRicing Table Area  */}
                </div>
            </div>
        </div>
    )
}
export default PricingThree;
