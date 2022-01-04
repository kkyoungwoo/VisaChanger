import React from 'react'
import './d_section.css'

function D_section() {
    return (
        <div className='procedure'>
            <div className='sequence'>
                <div className='circle'>
                    <div className='text'>면접요청</div>
                </div>
                <img src="/assets/main_page/arrow.png" alt="" />
                <div className='circle'>
                    <div className='text'>면접</div>
                </div>
                <img src="/assets/main_page/arrow.png" alt="" />
                <div className='circle'>
                    <div className='text'>채용</div>
                </div>
            </div>
            <div className='btn_warp'>
                <div className='btn_warp_text first'>외국인 채용, 오히려 쉽습니다.</div>
                <div className='btn_position'>
                    <div>
                        <a className='btn_warp_text middle_btn secoend' href="./assets/main_page/thek.pdf"  target="_blank"  rel = "noopener noreferrer" >
                            제안서 다운로드
                        </a>
                    </div>
                    <div>
                        <a className='btn_warp_text middle_btn third' href="http://kko.to/n8b_ti6vb" target="_blank"  rel = "noopener noreferrer" >
                            찾아오시는 길
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default D_section
