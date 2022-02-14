import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const TabOne = () => {
    return (
        <div>
            <div className="row">
                    <div className="col-lg-12">
                        <Tabs>
                            <div className="row row--30 align-items-center">
                                <div className="col-lg-5">
                                    <img className="radius-small" src='./images/tab/tabs-01.jpg' alt="Corporate React Template" />
                                </div>
                                <div className="col-lg-7 mt_md--40 mt_sm--40">
                                    <div className="rn-default-tab">
                                        <div className="tab-button-panel">
                                            <TabList className="tab-button">
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button>THE K 인사말</button>
                                                    </div>
                                                </Tab>
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button>THE K 솔루션</button>
                                                    </div>   
                                                </Tab>
                                            </TabList>
                                        </div>

                                        <div className="tab-content-panel">
                                        <TabPanel>
                                                <div className="rn-tab-content">
                                                    <div className="inner">
                                                        <p>
                                                            국제적 행정업무는 그 절차와 조건이 너무나 복잡하고 상황에 따라 여러 가지 일이 생길 가능성이 크기 때문에 일반적인 개인이 이 모든 것들을 숙지하고 상황에 맞춰서 대응하는 것은 매우 어려운 일입니다.
                                                            <br/><br/>또한 행정서류사무의 폭증으로 출입국사무소 및 각국 영사관에서도 전문 행정사의 대행을 통해 더 빠르게 행정사무를 처리할 수 있도록 지원하고 있습니다. 그렇기 때문에 다양한 행정지식을 숙지하고 적절한 요건을 갖춘 서류를 행정기관에 제공하며 행정 당사자에게 필요한 정보를 제공할 수 있는 전문적인 행정사가 필요합니다.
                                                        </p>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            
                                            <TabPanel>
                                                <div className="rn-tab-content">
                                                    <div className="inner">
                                                        <p>모든 노하우를 알려드릴 수는 없습니다. 하지만 계약이 진행되면 의뢰인에게 가장 안전한 방법의 해결 방법을 알려드리고 그 방법대로 업무가 진행됩니다.
                                                        <br/><br/>THE K 컨설팅은 법무부에 공식적으로 등록된 국제결혼 서류 및 외국인 출입국 비자 관련 서류 전문 대행사로서 10년 이상의 오랜 기간동안 축적된 해외 행정서류 대행 노하우와 신뢰를 중심으로 고객님의 눈과 귀와 발이 되어 고객님의 상황에 가장 적합한 출입국 행정서류 대행 및 자문을 제공해 드리도록 하겠습니다.</p>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                            <TabPanel>
                                                <div className="rn-tab-content">
                                                    <div className="inner">
                                                        <p>Exercitationem Ipsum lorem dolor sit amet consectetur, adipisicing elit. Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla  tempore corrupti! Nemo.</p>

                                                        <p>Ipsa Quibusdam, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tabs>
                    </div>
                </div>
        </div>
    )
}

export default TabOne
