import React from 'react'
import './c_section.css'

function C_section() {
    return (
        <div className='items_first'>
            <div className='item_warp'>
                <div className='items'>
                    <div className='item_text'>
                        <div>
                            취업 희망외국인의
                        </div>
                        <div>
                            자발적 방문
                        </div>
                    </div>
                    <img src="/assets/main_page/item_first.png" alt="" />
                </div>
                <div className='items'>
                    <div className='item_text'>
                        <div>
                            전국 가능
                        </div>
                        <div>
                            빠른 면접
                        </div>
                    </div>
                    <img src="/assets/main_page/item_secoend.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default C_section
