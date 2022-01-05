import React from 'react'
import './admin.css'

function Admin() {
    return (
        <div className='admin'>
            <div>
                <a href="./assets/admin/forbusiness.pdf"  target="_blank"  rel = "noopener noreferrer" >
                    인재채용 신청서
                </a>
                <a href="./assets/admin/forworker.pdf"  target="_blank"  rel = "noopener noreferrer" >
                    인재등록 신청서
                </a>
                <a href="./assets/admin/receiptlog.pdf"  target="_blank"  rel = "noopener noreferrer" > 
                    접수일지
                </a>
            </div>
        </div>
    )
}

export default Admin
