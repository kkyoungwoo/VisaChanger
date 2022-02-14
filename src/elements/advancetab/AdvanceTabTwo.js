import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const AdvanceTabTwo = () => {
    return (
        <div>
            <Tabs>
                <div className="row row--30">
                    <div className="col-lg-8">
                        <div className="advance-tab-content advance-tab-content-1">
                            <TabPanel>
                                <div className="tab-content">
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <img src="./images/tab/tabs-02.jpg" alt="Corporate Images" />
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            
                            <TabPanel>
                                <div className="tab-content">
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <img src="./images/tab/tabs-03.jpg" alt="Corporate Images" />
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="tab-content">
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <img src="./images/tab/tabs-04.jpg" alt="Corporate Images" />
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </div>
                    </div>
                    <div className="col-lg-4 mt_md--30 mt_sm--30">
                        <div className="advance-tab-button advance-tab-button-1 right-align">
                            <TabList className="tab-button-list">
                                <Tab>
                                    <div className="tab-button">
                                        <h4 className="title">Market Researce.</h4>
                                        <p className="description">You can make a visa for a short time.</p>
                                    </div>   
                                </Tab>
                                <Tab>
                                    <div className="tab-button">
                                        <h4 className="title">Corporate Report.</h4>
                                        <p className="description">You can make a visa for a short time.</p>
                                    </div>   
                                </Tab>
                                <Tab>
                                    <div className="tab-button">
                                        <h4 className="title">web site.</h4>
                                        <p className="description">You can make a visa for a short time.</p>
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
export default AdvanceTabTwo;
