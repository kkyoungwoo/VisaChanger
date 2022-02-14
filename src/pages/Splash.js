import React from 'react'
import {Link} from "react-router-dom";
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import Separator from "../elements/separator/Separator";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import FooterThree from '../common/footer/FooterThree';
import { FiArrowDown } from "react-icons/fi";

const Demo = [
    {
        Url : "/business-consulting",
        Image: "./images/demo/business-consulting.png" ,
        Imagelight: "./images/demo/business-consulting-light.png" ,
        Title: "Business Consulting",
        badge: "",
    },

    {
        Url : "/business-consulting-2",
        Image: "./images/demo/business-consulting-2.png" ,
        Imagelight: "./images/demo/business-consulting-2-light.png" ,
        Title: "Business Consulting",
        badge: "",
    },
    {
        Url : "/corporate",
        Image: "./images/demo/corporate.png" ,
        Imagelight: "./images/demo/corporate-light.png" ,
        Title: "Corporate",
        badge: "",
    },
    {
        Url : "/startup",
        Image: "./images/demo/startup.png" ,
        Imagelight: "./images/demo/startup-light.png" ,
        Title: "Startup",
        badge: "New",
    },
    {
        Url : "/web-agency",
        Image: "./images/demo/web-agency.png" ,
        Imagelight: "./images/demo/web-agency-light.png" ,
        Title: "Web Agency",
        badge: "New",
    },
    {
        Url : "/international-consulting",
        Image: "./images/demo/international-consulting.png" ,
        Imagelight: "./images/demo/international-consulting-light.png" ,
        Title: "International Consulting",
        badge: "New",
    },
    {
        Url : "/consulting",
        Image: "./images/demo/consulting.png" ,
        Imagelight: "./images/demo/consulting-light.png" ,
        Title: "Consulting",
        badge: "Hot",
    },
    {
        Url : "/finance",
        Image: "./images/demo/finance.png" ,
        Imagelight: "./images/demo/finance-light.png" ,
        Title: "Finance",
        badge: "",
    },
    {
        Url : "/digital-agency",
        Image: "./images/demo/digital-agency.png" ,
        Imagelight: "./images/demo/digital-agency-light.png" ,
        Title: "Digital Agency",
        badge: "",
    },
    {
        Url : "/seo-agency",
        Image: "./images/demo/seo-agency.png" ,
        Imagelight: "./images/demo/seo-agency-light.png" ,
        Title: "SEO Agency",
        badge: "",
    },
   
    {
        Url : "/company",
        Image: "./images/demo/company.png" ,
        Imagelight: "./images/demo/company-light.png" ,
        Title: "Company",
        badge: "",
    },
    {
        Url : "/personal-portfolio",
        Image: "./images/demo/personal-portfolio.png" ,
        Imagelight: "./images/demo/personal-portfolio-light.png" ,
        Title: "Personal Portfolio",
        badge: "",
    },
    {
        Url : "/freelancer",
        Image: "./images/demo/freelancer.png" ,
        Imagelight: "./images/demo/freelancer-light.png" ,
        Title: "Freelancer",
        badge: "Hot",
    },
    {
        Url : "/marketing",
        Image: "./images/demo/marketing.png" ,
        Imagelight: "./images/demo/marketing-light.png" ,
        Title: "Marketing Agency",
        badge: "",
    },
    {
        Url : "/travel-agency",
        Image: "./images/demo/travel-agency.png" ,
        Imagelight: "./images/demo/travel-agency-light.png" ,
        Title: "Travel Agency",
        badge: "",
    },
   
    {
        Url : "/business",
        Image: "./images/demo/business.png" ,
        Imagelight: "./images/demo/business-light.png" ,
        Title: "Business",
        badge: "",
    },
    
    {
        Url : "/event-conference",
        Image: "./images/demo/event-conference.png" ,
        Imagelight: "./images/demo/event-conference-light.png" ,
        Title: "Event Conference",
        badge: "",
    },
    {
        Url : "/creative-portfolio",
        Image: "./images/demo/creative-portfolio.png" ,
        Imagelight: "./images/demo/creative-portfolio-light.png" ,
        Title: "Creative Portfolio",
        badge: "",
    },
    
    {
        Url : "/about-us",
        Image: "./images/demo/corporate-about.png" ,
        Imagelight: "./images/demo/corporate-about-light.png" ,
        Title: "Corporate About",
        badge: "",
    },
    
    {
        Url : "#demo",
        Image: "./images/demo/coming-soon.png" ,
        Imagelight: "./images/demo/coming-soon.png" ,
        Title: "Finance Consulting",
        badge: "",
    },
    
    {
        Url : "#demo",
        Image: "./images/demo/coming-soon.png" ,
        Imagelight: "./images/demo/coming-soon.png" ,
        Title: "Finance Consulting",
        badge: "",
    },

]

const InnerPages = [
    {
        id: "1",
        Url : "/blog-grid",
        Image: "./images/demo/blog-grid.png" ,
        Imagelight: "./images/demo/blog-grid-light.png" ,
        Title: "Blog Grid"
    },
    {
        id: "2",
        Url : "/blog-grid-sidebar",
        Image: "./images/demo/blog-grid-sidebar.png" ,
        Imagelight: "./images/demo/blog-grid-sidebar-light.png" ,
        Title: "Blog Grid Sidebar"
    },
    {
        id: "3",
        Url : "/blog-list-view",
        Image: "./images/demo/blog-list-view.png" ,
        Imagelight: "./images/demo/blog-list-view-light.png" ,
        Title: "Blog List View"
    },
    {
        id: "4",
        Url : "/blog-list-sidebar",
        Image: "./images/demo/blog-list-sidebar.png" ,
        Imagelight: "./images/demo/blog-list-sidebar-light.png" ,
        Title: "Blog List Sidebar"
    },
    {
        id: "5",
        Url : "/blog-details/3",
        Image: "./images/demo/blog-details.png" ,
        Imagelight: "./images/demo/blog-details-light.png" ,
        Title: "Blog Details"
    },
    {
        id: "6",
        Url : "/portfolio",
        Image: "./images/demo/portfolio.png" ,
        Imagelight: "./images/demo/portfolio-light.png" ,
        Title: "Portfolio"
    },
    {
        id: "7",
        Url : "/portfolio-three-column",
        Image: "./images/demo/portfolio-three-column.png" ,
        Imagelight: "./images/demo/portfolio-three-column-light.png" ,
        Title: "Portfolio Three Column"
    },
    {
        id: "8",
        Url : "/portfolio-full-width",
        Image: "./images/demo/portfolio-full-width.png" ,
        Imagelight: "./images/demo/portfolio-full-width-light.png" ,
        Title: "Portfolio Full Width"
    },
    {
        id: "9",
        Url : "/portfolio-grid-layout",
        Image: "./images/demo/portfolio-grid-layout.png" ,
        Imagelight: "./images/demo/portfolio-grid-layout-light.png" ,
        Title: "Portfolio Grid Layout"
    },
    {
        id: "10",
        Url : "/portfolio-box-layout",
        Image: "./images/demo/portfolio-box-layout.png" ,
        Imagelight: "./images/demo/portfolio-box-layout-light.png" ,
        Title: "Portfolio Box Layout"
    },
    {
        id: "11",
        Url : "/portfolio-details/5",
        Image: "./images/demo/portfolio-details.png" ,
        Imagelight: "./images/demo/portfolio-details-light.png" ,
        Title: "Portfolio Details"
    },
    {
        id: "12",
        Url : "/about-us",
        Image: "./images/demo/about-us.png" ,
        Imagelight: "./images/demo/about-us-light.png" ,
        Title: "About Us"
    },
    {
        id: "13",
        Url : "/service",
        Image: "./images/demo/service.png" ,
        Imagelight: "./images/demo/service-light.png" ,
        Title: "Service"
    },
    {
        id: "14",
        Url : "/team",
        Image: "./images/demo/team.png" ,
        Imagelight: "./images/demo/team-light.png" ,
        Title: "Team"
    },
    {
        id: "15",
        Url : "/pricing",
        Image: "./images/demo/pricing.png" ,
        Imagelight: "./images/demo/pricing-light.png" ,
        Title: "Pricing"
    },
    {
        id: "16",
        Url : "/testimonial",
        Image: "./images/demo/testimonial.png" ,
        Imagelight: "./images/demo/testimonial-light.png" ,
        Title: "Testimonial"
    },
    {
        id: "17",
        Url : "/progressbar",
        Image: "./images/demo/progressbar.png" ,
        Imagelight: "./images/demo/progressbar-light.png" ,
        Title: "Progressbar"
    },
    {
        id: "18",
        Url : "/tab",
        Image: "./images/demo/tab.png" ,
        Imagelight: "./images/demo/tab-light.png" ,
        Title: "Tab"
    },
    {
        id: "18",
        Url : "/timeline",
        Image: "./images/demo/timeline.png" ,
        Imagelight: "./images/demo/timeline-light.png" ,
        Title: "Timeline"
    },
]

const Splash = () => {
    return (
        <>
           <SEO title="Doob" />
           <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent" />

                {/* Start Slider Area  */}
                <div className="demo-slider-area slider-area bg-transparent slider-style-1 pb--100 pt--70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-center">
                                    <div className="react-image mb--20">
                                        <img src="./images/demo/react-badge.png" alt="Doob React" />
                                    </div>
                                    <h1 className="title display-two">
                                        Next-gen all-in-one <br />
                                        <span className="theme-gradient">Business</span> & {" "}
                                        <span className="theme-gradient">Consulting</span>
                                        <br />
                                        React Template.
                                    </h1>
                                    <p className="description">We help our clients succeed by creating brand identities, digital experiences, and print materials.</p>
                                    <div className="button-group">
                                        <a className="btn-default btn-large round btn-icon" href="#demo">View Demo <FiArrowDown /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                <Separator />

                {/* Start Our Demo  */}
                <div className="rn-demo-area rn-section-gap" id="demo">
                    <div className="wrapper plr--150 plr_lg--30 plr_md--30 plr_sm--30">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "All Demo Here"
                                    title = "Doob All Demo."
                                    description = "We create a business and consulting react template with 50+ elements features. <br /> 19+ demo pages, faster loading and well documentated code."
                                />
                            </div>
                        </div>
                        <div className="row row--30">
                            {Demo.map((data, index) => (
                                <div className="col-lg-4 col-md-6 col-12 mt--40" key={index}>
                                    <div className="single-demo">
                                        <Link to={`${data.Url}`}>
                                            <div className="thumbnail">
                                                <img className="image-dark" src={`${data.Image}`} alt="Corporate Images" />
                                                <img className="image-light" src={`${data.Imagelight}`} alt="Corporate Images" />
                                                {data.badge ? <span className="label-badge">{data.badge}</span> : ''}
                                            </div>
                                        </Link>
                                        <h4 className="title"><Link to={`${data.Url}`}>{data.Title}</Link> </h4>
                                    </div>
                                </div>
                            ))} 
                        </div>
                    </div>
                </div> 
                {/* End Our Demo  */}


                <Separator />

                {/* Start Inner Pages  */}
                <div className="rn-inner-pages rn-section-gap">
                    <div className="wrapper plr--150 plr_lg--30 plr_md--30 plr_sm--30">

                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "All Others Pages"
                                    title = "All Others Pages."
                                    description = "Have a nice inner pages include in doob template."
                                    
                                />
                            </div>
                        </div>

                        <div className="row">
                            {InnerPages.map((data, index) => (
                                <div className="col-lg-4 col-md-6 col-12 mt--40" key={index}>
                                    <div className="single-demo">
                                        <Link to={`${data.Url}`}>
                                            <div className="thumbnail">
                                                <img className="image-dark" src={`${data.Image}`} alt="Corporate Images" />
                                                <img className="image-light" src={`${data.Imagelight}`} alt="Corporate Images" />
                                            </div>
                                        </Link>
                                        <h4 className="title"><Link to={`${data.Url}`}>{data.Title}</Link></h4>
                                    </div>
                                </div>
                            ))} 
                        </div>

                    </div>
                </div>
                {/* End Inner Pages  */}
                <FooterThree />
           </main>

        </>
    )
}

export default Splash;