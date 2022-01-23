import React, { useState,useEffect } from 'react';
import './f_section.css';

function F_section() {

    const [companyNum,setCompanyNum] = useState(48)
    let [count, setCount] = useState(new Date().getMonth());

    useEffect(()=>{
        if(count === 0){
            setCount(12)
        } 
    })

    return (
        <div className='last_section'>
            <div className='top_title'>
                <div>
                    여러 나라의 외국인들이
                </div>
                <div>
                    채용을 기다리고 있습니다.
                </div>
            </div>
            <div className='form_inner_box'>
                <div className='form_main_text'><span style={{ color:"red"}}>( {count}월 )</span> 신청서를 작성한 업체</div>
                <div className='form_company'>
                    <div className='number'>
                        {companyNum}
                    </div>
                    <div className='company_text'>
                        업체
                    </div>
                </div>
                <div className='form_inner_btn'>
                    <button>
                        <a href="/companyform">
                            온라인 신청서 작성
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default F_section
