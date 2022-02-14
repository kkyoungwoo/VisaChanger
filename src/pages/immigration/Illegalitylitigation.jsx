import React, { useState, useEffect } from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../elements/breadcrumb/BreadcrumbOne";
import { useHistory } from 'react-router-dom'
import FooterThree from '../../common/footer/FooterThree';

const filters = [
    {
      id: 1,
      text: "1",
      texter: "출입국 사범 문의",
      siteaddress:"/illegalitylitigation"
    },
    {
      id: 2,
      text: "2",
      texter: "불법체류자 구제",
      siteaddress:"/immigrationlitigation"
    },
    {
      id: 3,
      text: "3",
      texter: "보호 일시해제",
      siteaddress:"/protectionlitigation"
    }
];

const data = 
{
    "id": 1,
    "title": "",
    "date": "-",
    "client": "출입국 사범문의를 할 수 있습니다.",
    "month":"상담 무료",
    
    "subtitle": "상세 내용",
    "body": ["<p>출입국 관리법에서 정하고 있는 출국과 입국에 관한 규정을 위반한 죄. 또는 그런 죄를 범한 사람. 보호나 강제 퇴거 명령에 응하지 않은 사람, 입국 심사를 받지 아니하고 입국한 사람, 출국 심사를 받지 아니하고 출국한 사람, 취업 허가 없이 취업한 사람 등이 있습니다.</p>"],

    "content" : [
            {
                "title": "출입국관리법 93조의 2",
                "subtext": ["<p>벌칙 규정<br/>1. 출입국관리법에 따라 보호, 일시보호된 사람이 도주할 목적으로 시설, 기구 손괴, 타인 폭행, 협박<br/>2. 2명 이상이 합동하여 도주<br/>다음 각 호의 어느 하나에 해당하는 사람은 7년 이하의 징역 또는 7천만 원 이하의 벌금에 처합니다.<br/>1. 입국심사를 받아야 하는 외국인을 집단으로 불법 입국하게 하거나 이를 알선한 사람<br/>2. 외국인을 집단으로 불법 입국, 출국하게 하거나 대한민국을 거쳐 다른 국가로 불법 입국하게 할 목적으로 선박 등이나 여권, 사증, 탑승권, 그 밖에 출입국에 사용될 수 있는 서류 및 물품을 제공하거나 알선한 사람<br/>3. 불법으로 입국한 외국인을 집단으로 대한민국에서 은닉 또는 도피하게 하거나 그 목적으로 교통수단을 제공하거나 알선한 사람</p>"]
            },
            {
                "title": "출입국관리법 93조의 3",
                "subtext": ["<p>5천만 원 이하의 벌금 또는 5년 이하의 징역에 해당하는 사항<br/>1. 입국심사를 받지 아니하고 입국한 사람<br/>2. 직무상 알게 된 비밀을 누설하거나 직무상 목적 외의 용도로 이용한 사람</p>"]
            },
            {
                "title": "출입국관리법 94조",
                "subtext": ["<p>1. 출국심사를 받지 아니하고 출국한 사람<br/>2. 외국인이 유효한 여권이나 사증 없이 입국하였거나 미수교 국가 국민이면서 외국인 입국허가서 없이 입국한 사람<br/>3. 허위초청 알선, 허위 사증 발급이 정서 알선으로 입국한 사람<br/>4. 선박이나 기타 교통수단을 이용하여 외국인을 다른 국가에 불법으로 입국하게 한 사람<br/>5. 승무원 상륙허가 또는 관광상륙허가를 받지 아니하고 상륙한 사람<br/>6. 승무원 상륙허가 또는 관광상륙허가의 조건을 위반한 사람<br/>7. 체류 자격이나 체류 기간의 범위를 벗어나서 체류한 사람<br/>8. 취업활동을 할 수 있는 체류 자격을 받지 아니하고 취업활동을 한 사람<br/>9. 취업활동을 할 수 있는 체류 자격을 가지지 아니한 사람을 고용한 사람<br/>10. 취업활동을 할 수 있는 체류 자격을 가지지 아니한 외국인의 고용을 업으로 알선, 권유한 사람<br/>11. 체류 자격을 가지지 아니한 외국인을 자기 지배하에 두는 행위를 한 사람<br/>12. 체류 자격 외 활동 허가를 받지 아니하고 다른 체류 자격에 해당하는 활동을 한 사람<br/>13. 근무처의 변경허가 또는 추가 허가를 받지 아니한 외국인의 고용을 업으로 알선한 사람<br/>14. 거소 또는 활동 범위의 제한 등을 위반한 사람<br/>15. 체류 자격을 받지 아니하고 체류한 사람<br/>16. 체류 자격 변경허가를 받지 아니하고 다른 체류 자격에 해당하는 활동을 한 사람<br/>17. 체류 기간 연장 허가를 받지 아니하고 체류 기간을 초과하여 계속 체류한 사람<br/>18. 출국심사를 받지 아니하고 출국한 사람<br/>19. 외국인 등록증 등의 채무이행 확보 수단 제공 등의 금지규정을 위반한 사람<br/>20. 선박 등의 검색 및 심사를 위반한 사람</p>"]
            },
            {
                "title": "출입국관리법 95조",
                "subtext": ["<p>1. 입국심사를 받지 아니하고 입국한 사람<br/>2. 조건부 입국허가의 조건을 위반한 사람<br/>3. 긴급 상륙허가, 재난 상륙허가, 난민 임시 상륙허가를 받지 아니하고 상륙한 사람<br/>4. 긴급 상륙허가, 재난 상륙허가, 난민 임시 상륙허가 조건을 위반한 사람<br/>5. 지정된 근무처가 아닌 곳에서 근무한 사람<br/>6. 허가를 받지 아니하고 근무처를 변경하거나 추가한 사람 또는 근무처의 변경허가 또는 추가 허가를 받지 아니한 외국인을 고용한 사람<br/>7. 등록 의무를 위반한 사람<br/>8. 일시보호된 사람으로서 도주하거나 보호 또는 강제퇴거 등을 위한 호송 중에 도주한 사람<br/>9. 주거의 제한이나 그 밖의 조건을 위반한 사람"]
            },
            {
                "title": "출입국관리법 96조",
                "subtext": ["<p>1. 출항의 일시정지 또는 회항 명령이나 선박 등의 출입 제한을 위반한 사람<br/>2. 정당한 사유 없이 운수업자 등의 일반적 의무 등을 준수하지 아니하거나 승객 예약 정보의 열람 및 제공 등의 규정을 위반하여 열람 또는 문서 제출 요청에 따르지 아니한 사람<br/>3. 정당한 사유 없이 보고서를 제출하지 아니하거나 거짓으로 제출한 사람</p>"]
            },
            {
                "title": "출입국관리법 97조 (100만원 이하의 벌금)",
                "subtext": ["<p>1. 여권 등의 휴대 또는 제시 의무를 위반한 사람<br/>2. 체류지 변경 신고 의무를 위반한 사람<br/>3. 허가를 받지 아니하고 선박 등이나 출입국 심사장에 출입한 사람<br/>4. 사전 통보 의무에 따른 제출 또는 통보 의무를 위반한 사람<br/>5. 보고 또는 방지 의무를 위반한 사람<br/>6. 난민인정 증명서 또는 난민 여행 증명서를 반납하지 아니하거나 난민 여행 증명서 반납명령을 위반한 사람</p>"]
            },
            {
                "title": "출입국관리법 98조 (100만원 이하의 벌금)",
                "subtext": ["<p>1. 여권 등의 휴대 또는 제시 의무를 위반한 사람<br/>2. 체류지 변경 신고 의무를 위반한 사람</p>"]
            },
            {
                "title": "출입국관리법 100조 (200만원 이하의 과태료)",
                "subtext": ["<p>1. 외국인을 고용한 자 등의 신고의무를 위반한 사람<br/>2. 외국인 유학생의 관리에 관한 규정을 위반한 사람<br/>3. 근무처 변경, 추가 신고의무 위반한 사람<br/>4. 영주증 재발급 기간을 위반한 사람<br/>5. 출, 입항 보고를 하지 아니하거나 사실과 다르게 보고한 사람<br/>​<br/>100만 원 이하의 과태료<br/>6. 외국인 등록사항의 변경 신고를 하지 아니하거나, 위국인 등록증의 반납을 하지 아니한 사람<br/>7. 허가신청 의무자 규정을 위반한 사람<br/>8. 출입국 관리 공무원의 장부 또는 자료 제출 요구를 거부하거나 기피한 사람<br/>​<br/>50만 원 이하의 과태료<br/>9. 외국인 등록증 발급 신청을 하지 아니한 사람<br/>10. 각종 신청이나 신고에서 거짓 사실을 적거나 보고한 사람</p>"]
            },
            {
                "title": "기타 안내",
                "subtext": ["<p>긴 글을 요약하면서 의미가 조금 달라졌을 수 있으니 참고만 하시기 바랍니다</p>"]
            },
        ]
}


const Illegalitylitigation = () => {

    let history = useHistory();

    const [activeFilter, setActiveFilter] = useState("illegalitylitigation");
    const activeFilterColor = "/illegalitylitigation";
    
    const handleChange = (e) => {
        setActiveFilter(e.target.id);
    }
    
    useEffect(()=>{
        history.push(activeFilter)
    },[activeFilter])

    return (
        <>
            <SEO title="illegalitylitigation" />
            <Layout>
                <div className="rwt-portfolio-details rn-section-gap">
                    {/**cards start */}
                    <div Column="col-lg-4 col-md-6 mt--30 portfolio " >
                        <div className="col-lg-12">
                            <ul className="rwt-portfolio-filter filter-button-default liststyle mb--20">
                                {filters.map((filter) => (
                                <li className="list-item" key={filter.id} >
                                    <button
                                    onClick={handleChange}
                                    className={
                                        filter.siteaddress === activeFilterColor
                                        ? "current"
                                        : " "
                                    }
                                    id={filter.siteaddress}
                                    >
                                    <div className="none_pointer">
                                        {filter.texter}
                                    </div>
                                    </button>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/**cards end */}
                    <div className="container">
                        <BreadcrumbOne 
                        title="출입국 사범 문의"
                        rootUrl="/"
                        parentUrl="Home"
                        currentUrl="출국과 입국에 관한 규정을 위반한 문제에 대한 해결방법 안내"
                        />
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="inner">
                                    <div className="details-list">
                                        <div className="thumbnail alignwide">
                                        </div>
                                        <div className="row mt--40 row--30">
                                            <div className="col-lg-12">
                                                <div className="content-left">
                                                    <h4 className="title">{data.title}</h4>
                                                    <div className="single-list-wrapper">
                                                        <div className="single-list">
                                                            <label>분류:</label>
                                                            <span>{data.date}</span>
                                                        </div>
                                                        <div className="single-list">
                                                            <label>요약:</label>
                                                            <span>{data.client}</span>
                                                        </div>
                                                        <div className="single-list">
                                                            <label>요금:</label>
                                                            <span>{data.month}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mt--120">
                                                    <h3 className="subtitle">{data.subtitle}</h3>
                                                    <div className="description" dangerouslySetInnerHTML={{__html: data.body}}></div>
                                                    
                                                    {data.content.map((item,idx) => (
                                                    <div className="view-btn mt--50" key={idx}>
                                                        <h5 className="subtitle">{data.content[idx].title}</h5>
                                                        <div className="description" dangerouslySetInnerHTML={{__html: data.content[idx].subtext}}></div>
                                                    </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterThree/>
            </Layout>
        </>
    )
}
export default Illegalitylitigation;