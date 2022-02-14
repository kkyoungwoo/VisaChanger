import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../elements/breadcrumb/BreadcrumbOne";
import SectionTitle from "../../elements/sectionTitle/SectionTitle";
import { FiCheck } from "react-icons/fi";
import {Link} from "react-router-dom";

const Price = () => {
    return (
        <>
            <SEO title="Visa Price" />
            <Layout>
                <BreadcrumbOne 
                    title="요금 안내"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="문제가 발생하기 전에 컨설팅을 받는 것이 가장 현명한 방법입니다."
                />
                {/* Start Elements Area  */}
                    <div className="rwt-pricing-area rn-section-gap">
                        <div className="container">
                            <div className="row mb--40 mb_sm--0">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "무료상담 후 비용결제"
                                            title = "합리적인 온라인 가격 정책"
                                            description = ""
                                        />
                                </div>
                            </div>
                            
                            <div className="row row--15">

                                {/* Start PRicing Table Area  */}
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="rn-pricing style-5">
                                        <div className="pricing-table-inner">
                                            <div className="pricing-header">
                                                <h4 className="title">출입국 업무 위임 / 대행</h4>
                                                <div className="pricing">
                                                    <div className="price-wrapper">
                                                        <span className="currency"></span>
                                                        <span className="price">2만원 ~</span>
                                                    </div>
                                                    <span className="subtitle">무료상담 가능</span>
                                                </div>
                                            </div>
                                            <div className="pricing-body">
                                                <ul className="list-style--1">
                                                    <li><FiCheck /> 서류 접수</li>
                                                    <li><FiCheck /> 서류 발급</li>
                                                    <li><FiCheck /> 번호표 발급</li>
                                                    <li>.</li>
                                                    <li>.</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-footer">
                                                <Link className="btn-default btn-border" to="/form">대행 신청</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End PRicing Table Area  */}

                                {/* Start PRicing Table Area  */}
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="rn-pricing style-5 active">
                                        <div className="pricing-table-inner">
                                            <div className="pricing-header">
                                                <h4 className="title">비자 상담</h4>
                                                <div className="pricing">
                                                    <div className="price-wrapper">
                                                        <span className="currency"></span>
                                                        <span className="price">Free</span>
                                                    </div>
                                                    <span className="subtitle">무료상담 가능</span>
                                                </div>
                                            </div>
                                            <div className="pricing-body">
                                                <ul className="list-style--1">
                                                    <li><FiCheck /> 일자리 비자</li>
                                                    <li><FiCheck /> 유학 비자</li>
                                                    <li><FiCheck /> 거주 비자</li>
                                                    <li><FiCheck /> 투자 비자</li>
                                                    <li><FiCheck /> 기타 비자</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-footer">
                                                <Link className="btn-default" to="/form">상담 신청</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End PRicing Table Area  */}

                                {/* Start PRicing Table Area  */}
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="rn-pricing style-5">
                                        <div className="pricing-table-inner">
                                            <div className="pricing-header">
                                                <h4 className="title">일자리 소개</h4>
                                                <div className="pricing">
                                                    <div className="price-wrapper">
                                                        <span className="currency"></span>
                                                        <span className="price">15만원 ~</span>
                                                    </div>
                                                    <span className="subtitle">무료상담 가능</span>
                                                </div>
                                            </div>
                                            <div className="pricing-body">
                                                <ul className="list-style--1">
                                                    <li><FiCheck /> 공장,농장</li>
                                                    <li><FiCheck /> 사무직</li>
                                                    <li><FiCheck /> E-7</li>
                                                    <li><FiCheck /> 프리랜서</li>
                                                    <li>.</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-footer">
                                                <Link className="btn-default btn-border" to="/form">안내 받기</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End PRicing Table Area  */}

                            </div>


                        </div>
                    </div>
                    {/* End Elements Area  */}
            </Layout>
        </>
    )
}
export default Price;