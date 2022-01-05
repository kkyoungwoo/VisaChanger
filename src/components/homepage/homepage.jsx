import React from 'react'
import MainSection from './section/Main_section'
import Footer from './footer/Footer'
import Header from './header/Header'
import Float from './float/Float'
import { BrowserRouter as Router ,Route ,Switch ,Link } from "react-router-dom";
import Emailform from '../email/Emailform'
import Admin from './Admin'
import NotFound from './NotFound'
import './homepage.css'

function Homepage() {
    return (
        <div className="home_bg">
            <div className="global_width">
                <Header />
                    <Switch>
                        <Route path="/" exact>
                            <MainSection />
                            <Float />
                        </ Route>
                        <Route path="/form" exact>
                            <Emailform />
                        </ Route>
                        <Route path="/admin" exact>
                            <Admin />
                        </ Route>
                        <Route path="*" component={NotFound} exact />
                    </ Switch>
                <Footer />
            </div>
        </div>
    )
}

export default Homepage
