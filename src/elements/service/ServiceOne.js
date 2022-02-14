import React from 'react';
import { FiActivity, FiCast, FiMap } from "react-icons/fi";
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        icon: <FiActivity />,
        title: '안전',
        description: '합법적인 사업자등록이 되어 있으며 법무법인 등 다양한 기업과 협력하여 문제가 없도록 진행하고 있습니다.'
    },
    {
        icon: <FiCast />,
        title: '가능성',
        description: '비자 발급은 확정이 아닌 심사입니다. 출입국사무소가 원하는 핵심 포인트를 제공하여 비자발급의 가능성을 높입니다.'
    },
    {
        icon: <FiMap />,
        title: '장기 계획',
        description: '한국에서 장기 체류하고 싶은 외국인은 다음 비자 획득을 위해 최소 1년 이상 미리 준비해야 합니다.'
    },
]

const ServiceOne = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="icon">
                                {val.icon}
                            </div>
                            <div className="content">
                                <h4 className="title w-600"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceOne;