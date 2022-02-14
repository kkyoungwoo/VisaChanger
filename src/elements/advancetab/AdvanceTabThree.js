import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const AdvanceTabThree = () => {
    return (
        <div>
            <Tabs>
                <div className="row row--30">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="advance-tab-content advance-tab-content-1">
                            <TabPanel>
                                <div className="tab-content">
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <img className="w-100" src="./images/tab/tabs-02.jpg" alt="Corporate Images" />
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            
                            <TabPanel>
                                <div className="tab-content">
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <img className="w-100" src="./images/tab/tabs-03.jpg" alt="Corporate Images" />
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="tab-content">
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <img className="w-100" src="./images/tab/tabs-04.jpg" alt="Corporate Images" />
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </div>
                    </div>
                    <div className="col-lg-10 offset-lg-1 mt--40">
                        <div className="advance-tab-button advance-tab-button-1 right-top">
                            <TabList className="tab-button-list row">
                                <Tab className="col-lg-4">
                                    <div className="tab-button">
                                        <h4 className="title">Market Researce.</h4>
                                        <p className="description">Use Doob template you can build a corporate website a short time.</p>
                                    </div>   
                                </Tab>
                                <Tab className="col-lg-4">
                                    <div className="tab-button">
                                        <h4 className="title">Corporate Report.</h4>
                                        <p className="description">Use Doob template you can build a corporate website a short time.</p>
                                    </div>   
                                </Tab>
                                <Tab className="col-lg-4">
                                    <div className="tab-button">
                                        <h4 className="title">App Development.</h4>
                                        <p className="description">Use Doob template you can build a corporate website a short time.</p>
                                    </div>   
                                </Tab>
                            </TabList>
                        </div>
                    </div>
                </div>
            </Tabs>
        </div>
    )
}
export default AdvanceTabThree;
