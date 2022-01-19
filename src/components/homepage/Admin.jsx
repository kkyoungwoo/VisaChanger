import React from 'react'
import './admin.css'
import Header from './header/Header'

function Admin() {
    return (
        <div className='admin'>
            <Header />
            <div className='admin_items'>
                <a href="./assets/admin/forbusiness.pdf"  target="_blank"  rel = "noopener noreferrer" >
                    인재채용 신청서
                </a>
                <a href="./assets/admin/forworker.pdf"  target="_blank"  rel = "noopener noreferrer" >
                    인재등록 신청서
                </a>
                <a href="./assets/admin/receiptlog.pdf"  target="_blank"  rel = "noopener noreferrer" > 
                    접수일지
                </a>
                <a href="./assets/admin/simpleform.pdf"  target="_blank"  rel = "noopener noreferrer" > 
                    기업 간단 상담지
                </a>
                <a href="./assets/admin/entrepreneur.pdf"  target="_blank"  rel = "noopener noreferrer" > 
                    사업자 정보
                </a>
                <a href="./assets/admin/humanoffice.pdf"  target="_blank"  rel = "noopener noreferrer" > 
                    인력소 정보
                </a>
                <a href="./assets/admin/merged.pdf"  target="_blank"  rel = "noopener noreferrer" > 
                    사업자+인력소 정보
                </a>
                <a href="./form"  target="_blank"  rel = "noopener noreferrer" > 
                    외국인 DB 간편 수집 링크
                </a>
            </div>
        </div>
    )
}

export default Admin
