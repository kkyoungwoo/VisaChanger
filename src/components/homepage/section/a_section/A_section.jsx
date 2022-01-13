import React from 'react'
import './a_section.css'

function A_section() {
    return (
        <div className='first_section'>
            <div className='type first'>
                <div className='center_position'>
                    <div className="circle">
                        <div>E-7</div>
                        <div>사무직</div>
                        <div>영업직</div>
                    </div>
                    <div className='circle_text'>
                        <div>통역, 해외 마케팅, 해외 바이어, 연구</div>
                        <div>해외 쇼핑몰, 프로그래머, VR 등 전문직</div>
                    </div>
                </div>
                <img src="/assets/main_page/main_bg_first.png" alt="" />
            </div>
            <div className='type secoend'>
                <div className='center_position'>
                    <div className='circle'>
                        <div>D-2, D-10</div>
                        <div>현장직</div>
                    </div>
                        <div className='circle_text'>
                            단순노무, 생산직, 아르바이트 등
                        </div>
                </div>
                <img src="/assets/main_page/main_bg_secound.png" alt="" />
            </div>
        </div>
    )
}

export default A_section
