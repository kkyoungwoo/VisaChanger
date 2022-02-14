import React from 'react';
import SEO from "../common/SEO";
import {Link} from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import HeaderOne from '../common/header/HeaderOne';
import HeaderTopBar from '../common/header/HeaderTopBar';

import Copyright from '../common/footer/Copyright';
import ScrollTop from '../common/footer/ScrollTop';
import PortfolioOne from '../elements/portfolio/PortfolioOne';
import BrandThree from '../elements/brand/BrandThree';

import Separator from "../elements/separator/Separator";
import SectionTitle from "../elements/sectionTitle/SectionTitle";


const CreativePortfolio = () => {
    return (
        <>
            <SEO title="Creative Portfolio" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent" />

                {/* Start Slider area  */}
                <div className="slider-area slider-style-7 height-750">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-center">
                                    <h4 class="subtitle rn-sub-badge"><span class="theme-gradient">Portfolio Box Layout</span></h4>
                                    <h1 className="title">Doob Creative Portfolio <br /> For Build Website.</h1>
                                    <div className="button-group mt--40 mt_sm--20">
                                        <a className="btn-default btn-icon round btn-large" target="_blank" href="https://themeforest.net/checkout/from_item/33571911?license=regular">Purchase Now <i className="icon"><FiArrowRight /></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider area  */}

                <Separator />

                <div className="rwt-portfolio-area rn-section-gapTop">
                    <div className="container-fluid plr--60 plr_md--15 plr_sm--15">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Portfolio Box Layout"
                                    title = "You can customize everything!"
                                    description = ""
                                />
                            </div>
                        </div>
                        <PortfolioOne Column="col-lg-4 mt--30 box-grid-layout no-overlay" />
                    </div>
                </div>


                {/* Start Brand Area  */}
                <div className="rwt-brand-area ptb--90">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mt--10">
                                <BrandThree brandStyle="brand-style-2" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area  */}

                <Copyright />
                <ScrollTop />
            </main>
        </>
    )
}
export default CreativePortfolio;