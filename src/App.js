import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PageScrollTop from './components/pageToTop/PageScrollTop'

// Pages import Here 
import Corporate from "./pages/Corporate";
import Business from "./pages/Business";
import Consulting from "./pages/Consulting";
import InternationalConsulting from "./pages/InternationalConsulting";

import Portfolio from "./elements/portfolio/Portfolio";
import portfolioThreeColumn from "./elements/portfolio/PortfolioThreeColumn";
import PortfolioFullWidth from "./elements/portfolio/PortfolioFullWidth";
import PortfolioGrid from "./elements/portfolio/PortfolioGrid";
import PortfolioBoxLayout from "./elements/portfolio/PortfolioBoxLayout";
import PortfolioDetails from "./pages/PortfolioDetails";
import RnAccordion from "./elements/accordion/RnAccordion";
import Contact from "./elements/contact/Contact";

import Error from "./pages/Error";

import Introduction from "./pages/aboutus/Introduction";

import typeofvisa from "./pages/visa/Typeofvisa";

import Entrance from "./pages/studying/Entrance";
import D2 from "./pages/studying/D2";
import D4 from "./pages/studying/D4";

import Residentregistration from "./pages/registration/Residentregistration";
import Myselfregistration from "./pages/registration/Myselfregistration";
import Parentalregistration from "./pages/registration/Parentalregistration";
import Descendantregistration from "./pages/registration/Descendantregistration";
import Orphanregistration from "./pages/registration/Orphanregistration";
import Onotherregistration from "./pages/registration/Onotherregistration";

import Illegalitylitigation from "./pages/immigration/Illegalitylitigation";
import Immigrationlitigation from "./pages/immigration/Immigrationlitigation";
import Protectionlitigation from "./pages/immigration/Protectionlitigation";

import Criminallitigation from "./pages/litigation/Criminallitigation";
import Civillitigation from "./pages/litigation/Civillitigation";
import Administrativelitigation from "./pages/litigation/Administrativelitigation";
import Familylitigation from "./pages/litigation/Familylitigation";

import Visainquiry from "./pages/inquiry/Visainquiry";
import Workinquiry from "./pages/inquiry/Workinquiry";
import Agencyinquiry from "./pages/inquiry/Agencyinquiry";
import Price from "./pages/inquiry/Price";
import Paidinquiry from "./pages/inquiry/Paidinquiry";

import Form from "./pages/form/Form";

// Import Css Here 
import './assets/scss/style.scss';


const App = () => {
    
    return (
        <Router>
            <PageScrollTop>
                <Switch>
                    {/**메인페이지 */}
                    <Route path={`${process.env.PUBLIC_URL + "/"}`} exact component={Consulting}/>

                    {/**회사 소개 */}            
                    <Route path={`${process.env.PUBLIC_URL + "/introduction"}`} exact component={Introduction}/>
                    {/**비자 안내 */}
                    <Route path={`${process.env.PUBLIC_URL + "/typeofvisa"}`} exact component={typeofvisa}/>
                    {/**유학 */}
                    <Route path={`${process.env.PUBLIC_URL + "/entrance"}`} exact component={Entrance}/>
                    <Route path={`${process.env.PUBLIC_URL + "/d2"}`} exact component={D2}/>
                    <Route path={`${process.env.PUBLIC_URL + "/d4"}`} exact component={D4}/>
                    {/**행정 민원 */}
                    <Route path={`${process.env.PUBLIC_URL + "/residentregistration"}`} exact component={Residentregistration}/>
                    <Route path={`${process.env.PUBLIC_URL + "/myselfregistration"}`} exact component={Myselfregistration}/>
                    <Route path={`${process.env.PUBLIC_URL + "/parentalregistration"}`} exact component={Parentalregistration}/>
                    <Route path={`${process.env.PUBLIC_URL + "/descendantregistration"}`} exact component={Descendantregistration}/>
                    <Route path={`${process.env.PUBLIC_URL + "/orphanregistration"}`} exact component={Orphanregistration}/>                    
                    <Route path={`${process.env.PUBLIC_URL + "/onotherregistration"}`} exact component={Onotherregistration}/>
                    {/**사범 */}
                    <Route path={`${process.env.PUBLIC_URL + "/immigrationlitigation"}`} exact component={Immigrationlitigation}/>
                    <Route path={`${process.env.PUBLIC_URL + "/illegalitylitigation"}`} exact component={Illegalitylitigation}/>
                    <Route path={`${process.env.PUBLIC_URL + "/protectionlitigation"}`} exact component={Protectionlitigation}/>                    
                    {/**소송 */}
                    <Route path={`${process.env.PUBLIC_URL + "/criminallitigation"}`} exact component={Criminallitigation}/>
                    <Route path={`${process.env.PUBLIC_URL + "/civillitigation"}`} exact component={Civillitigation}/>                    
                    <Route path={`${process.env.PUBLIC_URL + "/familylitigation"}`} exact component={Familylitigation}/>
                    <Route path={`${process.env.PUBLIC_URL + "/administrativelitigation"}`} exact component={Administrativelitigation}/>
                    {/**고객센터 */}
                    <Route path={`${process.env.PUBLIC_URL + "/visainquiry"}`} exact component={Visainquiry}/>
                    <Route path={`${process.env.PUBLIC_URL + "/workinquiry"}`} exact component={Workinquiry}/>                    
                    <Route path={`${process.env.PUBLIC_URL + "/agencyinquiry"}`} exact component={Agencyinquiry}/>
                    <Route path={`${process.env.PUBLIC_URL + "/Price"}`} exact component={Price}/>                    
                    <Route path={`${process.env.PUBLIC_URL + "/paidinquiry"}`} exact component={Paidinquiry}/>

                    <Route path={`${process.env.PUBLIC_URL + "/international-consulting"}`} exact component={InternationalConsulting}/>
                    <Route path={`${process.env.PUBLIC_URL + "/corporate"}`} exact component={Corporate}/>
                    <Route path={`${process.env.PUBLIC_URL + "/business"}`} exact component={Business}/>

                    <Route path={`${process.env.PUBLIC_URL + "/accordion"}`} exact component={RnAccordion}/>
                    <Route path={`${process.env.PUBLIC_URL + "/contact"}`} exact component={Contact}/>

                    <Route path={`${process.env.PUBLIC_URL + "/error"}`} exact component={Error}/>
                    
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio"}`} exact component={Portfolio}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-three-column"}`} exact component={portfolioThreeColumn}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-full-width"}`} exact component={PortfolioFullWidth}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-grid-layout"}`} exact component={PortfolioGrid}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-box-layout"}`} exact component={PortfolioBoxLayout}/>
                    <Route path={`${process.env.PUBLIC_URL + "/employmentvisa/:id"}`} exact component={PortfolioDetails}/>

                    <Route path={`${process.env.PUBLIC_URL + "/form"}`} exact component={Form}/>

                    <Route path="*" component={Error} exact />

                </Switch>
            </PageScrollTop>
        </Router>
    )
}


export default App
