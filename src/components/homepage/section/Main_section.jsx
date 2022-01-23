import React, { useEffect } from 'react'
import { onSnapshot, collection } from 'firebase/firestore'
import Asection from './a_section/A_section'
import Bsection from './b_section/B_section'
import Csection from './c_section/C_section'
import Dsection from './d_section/D_section'
import Esection from './e_section/E_section'
import Fsection from './f_section/F_section'
import './main_section.css'

import Header from '../header/Header'

function Main_section() {

    return (
        <div className="main">
            <Header />
            <div className="title">
                <div className="section">
                    <div className="sub_top">합법적으로 취업이 가능한 외국인</div>
                    <div className="sub_middle">1,695,643 명</div>
                    <div className="sub_bottom">외국인 구직 회사를 찾고 있습니다.</div>
                </div>
                <div className='title_img'>
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
