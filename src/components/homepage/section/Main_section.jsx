import React from 'react'
import Asection from './a_section/A_section'
import Bsection from './b_section/B_section'
import Csection from './c_section/C_section'
import Dsection from './d_section/D_section'
import Esection from './e_section/E_section'
import Fsection from './f_section/F_section'
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
                    <img src="/assets/main_page/main_img.png" alt="" />
                </div>
            </div>
            <Asection />
            <Bsection />
            <Csection />
            <Dsection />
            <Esection />
            <Fsection />
        </div>
    )
}

export default Main_section
