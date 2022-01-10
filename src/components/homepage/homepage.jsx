import React, {useRef} from 'react'
import MainSection from './section/Main_section'
import Footer from './footer/Footer'
import Header from './header/Header'
import Float from './float/Float'
import { BrowserRouter as Router ,Route ,Switch ,Link } from "react-router-dom";
import Emailform from '../email/Emailform'
import Admin from './Admin'
import Form from '../form/Form'
import NotFound from './NotFound'
import Succeeded from '../form/Succeeded'
import ForeignerForm from '../foreignerform/ForeignerForm'
import Visa from './visa/Visa'
import Visaform from '../visaform/Visaform'
import './homepage.css'

function Homepage() {

    const useref = useRef(null)
    const bannerHeightRef = useRef(null)

    return (
        <div className="home_bg">
            <div className="global_width">
                    <Switch>
                        <Route path="/" exact>
                            <MainSection />
                            <Float />
                        </ Route>
                        <Route path="/companyform" exact>
                            <Emailform />
                        </ Route>
                        <Route path="/foreigner" exact>
                            <ForeignerForm />
                        </ Route>
                        <Route path="/admin" exact>
                            <Admin />
                        </ Route>
                        <Route path="/form" exact>
                            <Form />
                        </ Route>succeeded
                        <Route path="/succeeded" exact>
                            <Succeeded />
                        </ Route>
                        <Route path="/visa" exact>
                            <Visa 
                                bannerHeightRef={bannerHeightRef}
                                useref={useref}
                            />
                        </ Route>
                        <Route path="/visaform" exact>
                            <Visaform />
                        </ Route>
                        <Route path="*" component={NotFound} exact />
                    </ Switch>
                <Footer />
            </div>
        </div>
    )
}

export default Homepage
