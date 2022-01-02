import React from 'react'
import A_section from './A_section'
import B_section from './B_section'
import C_section from './C_section'
import D_section from './D_section'
import E_section from './E_section'
import F_section from './F_section'
import './main_section.css'

function Main_section() {
    return (
        <div className="main_section">
            <div>
            <div className="logo_text">THE K <span>컨설팅</span></div>
                <div>
                    <div>합법적으로 취업이 가능한 외국인</div>
                    <div>1,695,643 명</div>
                    <div>외국인 구직 회사를 찾고 있습니다.</div>
                </div>
                <div>
                    <img src="" alt="asd" />
                </div>
            </div>
            <A_section />
            <B_section />
            <C_section />
            <D_section />
            <E_section />
            <F_section />
        </div>
    )
}

export default Main_section
